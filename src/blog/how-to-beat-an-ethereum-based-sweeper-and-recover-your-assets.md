---
slug: "how-to-beat-an-ethereum-based-sweeper-and-recover-your-assets"
title: "How to Beat an Ethereum Sweeper Script and Recover Your Assets!"
date: 2021-04-16 00:00:00 +0100
type: blog
meta_img: /images/.common/meta.png
meta_desc: "How to beat the bad actors draining your wallet"
comments: true
hidden: false
tags: "security,blockchain,recovery"
---

When your secrets get compromised, bad actors will often put a sweeper on your account to take advantage of anything that happens to the address in the future — either you deposit ETH to try and save some tokens, an airdrop happens, or something else.

This article outlines how users get swept in the first place and three unique methods for rescuing any un-swept funds (like staked funds).

### How are users getting compromised?
We've seen a recent influx of users pretending to be Telegram group admins. These fake group admins then offer assistance to users who ask for it in the legitimate group's main channel (though they are not legitimate admins — they copy the admin profiles with some small differences in the usernames). The imposter would often talk a lot of jargon to confuse you and share a link to a website that looks legitimate (because of the branding), but it would eventually ask for your seed phrase or private key.

Then boom, your crypto is gone and there's a sweeper on it.

This is an example of one of those fake sites:

https://twitter.com/CryptoPhishing/status/1378014872919805952

*Credit to researcher @dubstard for discovering many of these fake WalletConnect campaigns!*


### How do Sweepers Work?
A sweeper is some code that monitors the blockchain — including the [txpool](https://support.mycrypto.com/troubleshooting/sending/transactions-not-showing-or-pending), which technically is not on-chain yet — to react faster than a human to programmatically sign specific transactions to a set of rules.

This means that a sweeper is blind to you viewing your address on a block explorer or “connecting” it to a dapp's UI. The sweeper only sees your activity once you have signed and broadcasted a transaction to the network.

Over time we've seen an evolution of sweepers and the campaigns that utilize them.

#### The evolution of sweepers

During 2017, there was a decent sum of campaigns that would utilize tokens that had a lock functionality (i.e., you could not successfully call transfer() ) but were included within price feeds. [Dave Appleton published an article](https://dave-appleton.medium.com/is-this-a-phishing-scam-119e68ce2f40) about one such campaign.

The scam would be for a bad actor to obtain assets that would then be locked, even though block explorer still had a price feed for the tokens — a popular one being Minerum (MNE). They would then publish the private key to this address (in some manner that looks innocent or a mistake) and wait for people to deposit ETH to the address, intended to use it as gas to move the tokens. The bad actor would have a sweeper on this account to swiftly move the deposited ETH to their own account. It's theorized that the locked tokens are considered worthless, so they try to recoup some of that locked value from unsuspecting “greedy” users trying to take the [locked] tokens.

Nowadays we have, at least with a wider application, basic ETH sweepers being deployed on compromised addresses and also some groups using more advanced sweeper logic to sweep ERC20 tokens based on price feeds.

I was doing some recon research on a compromised address earlier this year and discovered that sweepers have continued to evolve:

* The sweeper favors the asset that is the highest USD value — even if that means spending more in transaction fees to sweep it.
* The sweeper will use all the available ETH to maximize the swept value whilst also having a high percentage of being the “winning” transaction for the nonce.
* The sweeper has a matching engine to match staked tokens (ie: xKNCa = KNC) to their native token so that price feeds reflect on the staked token.
* The sweeper has its own internal nonce counter and periodically resets the nonce to `eth.getTransactionCount()` output if their highest nonce does not confirm within a timeframe (or is dropped/replaced by another).
* If there is an asset with high value, desirable by the sweeper, there has been some activity to suggest the operator “sacrificing” some ETH by funding the addresses to attempt to quickly sweep the high-value asset from the account.
* Some sweepers do not sweep the assets if the USD value is below a threshold value, meaning you may not realize you have a sweeper on your account. Scary.

Considering that we first wrote about them in 2017, the sweepers that we are seeing on compromised accounts nowadays are much more advanced; engineered to maximize the profit for the operators— and the loss for the victims.

### Sweeper, No Sweeping!

To start, you (a human) won’t be faster than code, so our solution will involve coding. There are a couple of different routes you can take — neither gives a 100% guarantee, but the odds are likely in your favor.

You will need to create a list of tokens that you want to attempt to rescue, ordered by priority, so that you can easily determine your plan. You will need to list:

* The token contract address
* Whether the token is staked (and if unstaking is timelocked or not)
* Whether the token is able to be transferred
* The tokens value (to the user or in USD terms to realize priority weighting)

It is critical that you go through this methodically so that you can execute this quickly and efficiently. As famously said: *“If you fail to plan, you are planning to fail.”*

#### Using a self-destructing smart contract

Much like the method of using TAICHI, we can use a smart contract to get ETH into the account without it being obvious in the public txpool. We do this by deploying a smart contract from a safe address, and on the construct we send ETH to the compromised address (this will be an [internal transaction](https://support.mycrypto.com/general-knowledge/ethereum-blockchain/what-are-internal-transactions)).

```sol
pragma solidity >=0.7.0 <0.9.0;

contract MoveETH {
    constructor(address sendToAddress) payable {
        address payable addr = payable(address(sendToAddress));
        selfdestruct(addr);
    }
}
```

By deploying this contract, we can send ETH and the compromised address string in the constructor argument. This contract works by creating the contract and self-destructing in the same transaction. The use of `selfdestruct()` means we clear the blockchain state (since it's a one time use contract) and forward the ETH to the compromised address in 1 transaction.

Example: https://goerli.etherscan.io/tx/0x82ccb222eae55aaea73dd0efee1ea6ed7320f880889f280d4a343b8823f86692

Note that this method, whilst effective, does add additional cost as we are doing more operations than just sending ETH from one account to another. It costs about 70,000 gas. At high gas prices, it could cost ~0.0112ETH in only gas for this method to be used.

From here, we would broadcast pre-signed transactions from the compromised address via TAICHI (or a public node ensuring we are using all the ETH in the account so that a sweeper cannot frontrun us - or at least make it unlikely to be frontrunned as a sweeper would need to send more ETH to the account to pay a higher gas price).

#### Using [Flashbots](https://github.com/flashbots/pm/blob/main/guides/searcher-onboarding.md#flashbots-alpha---searcher-onboarding)

Generally speaking, you will need ETH for a transaction to be mined (as transaction fees are paid for by the sender). However, thanks to [Flashbots](https://github.com/flashbots), we can much more easily get a transaction confirmed with 0 gas price (read $0.00 transaction fee) from the EOA by “bribing” the miner with funds from another account — meaning we can move tokens out of the compromised address without funding it with ETH for gas fees. Yes, that's right!

This strategy requires two accounts — the compromised account, and an account to bribe the miner with.

The [Flashbots](https://github.com/flashbots) group has published a project called [Flashbots/searcher-sponsored-tx](https://github.com/flashbots/searcher-sponsored-tx) which shares the fundamentals of setting up this strategy to get your transactions confirmed from two accounts.

As we will be paying for the transaction with another account, we do not need the compromised account to have ETH in it. In fact, we don't want ETH in it - because the last thing you want is for the scammer/sweeper to notice you're trying to get some funds out, and then use ETH within the compromised account to beat you.

To ensure there's no ETH in the compromised account, we highly recommend running [a burner bot](https://twitter.com/smpalladino/status/1373049027365904389).

We generally advise running this burner bot on more than one machine, using different RPC nodes on each instance. For example, running a burner locally using [Infura](https://infura.io/), and a burner on a remote server with another provider such as [Quiknode](https://quiknode.io/?tap_a=67226-09396e&tap_s=860550-6c3251). This so that you have a redundancy plan in case we have high network latency or node issues (rate limits, syncing issues).

The code in [Flashbots/searcher-sponsored-tx](https://github.com/flashbots/searcher-sponsored-tx) will need to be altered for your specific needs, but the engine is there for you to rescue your tokens from a compromised address. The Flashbots engine is flexible enough to support a single [`transfer()`](https://eips.ethereum.org/EIPS/eip-20) call, or [`unstake()`](https://eips.ethereum.org/EIPS/eip-900#unstake) and [`transfer()`](https://eips.ethereum.org/EIPS/eip-20).

If you're not too familiar with code, you can try [@kendricktan/flashbots.tools](https://github.com/kendricktan/flashbots.tools) website that gives you a UI to the flashbots functionality: https://flashbots.tools/

### How do you avoid all this nonsense in the first place?

Of course, the best course of action is to not get in this state of needing to beat a bad actor sweeping your assets from your compromised address.

In recent years, an anti-pattern has been established on some UIs that is teaching users to be inherently insecure — allowing users to use their raw secrets on a dapp interface. This is bad and should always be discouraged.

https://twitter.com/sniko_/status/1109883155601940482

You should never be entering your raw secrets (private keys, keystore files, mnemonic phrases) onto any internet-connected machine and especially not on any webpage.

We recommend using a hardware wallet to ensure private key containment on a separate device - If you’re using MetaMask to interact with dapps, they recently released an update to allow for [multiple hardware wallet addresses](https://github.com/MetaMask/metamask-extension/pull/10505) to be used.

* Buy a [Ledger](https://www.ledgerwallet.com/r/1985?path=/products/)
* Buy a [Trezor](https://shop.trezor.io/?offer_id=10&aff_id=1735)

If you’re using your Mobile device to interact with dapps, then we recommend utilizing [WalletConnect](https://walletconnect.org/) to sign messages (note: WalletConnect will never ask for your secrets).