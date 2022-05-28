---
slug: "2021-first-half-in-review-major-blockchain-crypto-hacks-scams-shutdowns"
title: "2021 (the first half) In Review: Crypto Hacks, Scams & Shutdowns"
date: 2021-07-08 00:00:00 +0100
type: blog
meta_img: /images/.common/meta.png 
meta_desc: "The world of cryptocurrency is as dangerous as ever and it’s hard to ignore."
comments: true
hidden: false
---

*To catch up, check out my previous [2020 in Review](/2020-in-review-major-blockchain-crypto-security-incidents).*

The world of cryptocurrency is as dangerous as ever and it’s hard to ignore. Before we get into the list that you’re waiting for, how can we help make this industry safer?

In the first half of 2021, we:

* Released the new MyCrypto to help the user experience and make the user journey of using and monitoring crypto easier and more straightforward.
* [Published a report of bad actors abusing the famous ERC20 `approve()` method](/bad-actors-abusing-erc20-approval-to-steal-your-tokens) (something that most users just blindly trust) to steal assets.
* Written a [guide to help you use MyCrypto much more privately](https://blog.mycrypto.com/how-to-use-mycrypto-more-privately).
* As the NFT market booms, we also published an [educational piece about common scams targeting NFT buyers](https://blog.mycrypto.com/common-nft-scams-to-avoid/).
* Continued our anti-scam/anti-phishing efforts with CryptoScamDB.

Improving this industry’s awareness and prevention of scams, exploits, and hacks is a tall order, but we’re trying.

Let's take a deeper look at the overall industry to see if we, as a whole, have improved and learned from 2020.

*What follows is a list of the major/noteworthy security incidents of 2021 Q1/Q2. However, we will NOT be recapping all the rug-pulls and events that occurred, as there are too many to count...*

![January-March](./images/2021-first-half-in-review-major-blockchain-crypto-hacks-scams-shutdowns/1.png "January - March")

The first quarter of 2021 had some interesting events, from entire protocol shutdowns and DeFi hacks, to arrest confirmations. We saw targeted attacks on individuals that shook the industry purely because of the lengths bad actors will go to for a tidy payday.

Compared to previous years, the first quarter did not have as many cryptocurrency exchange hacks. This is either because attention is being drawn elsewhere or exchanges have learned from previous failures and adjusted their security controls.

### Story: [Yearn hacked for $11M](https://curve.substack.com/p/february-5-2021-yearn-hacked-for)
**TL;DR:** One of the biggest/OG automated yield farming protocols, Yearn, had one of their v1 vaults exploited to the tune of $11M, and users of the vault saw a direct loss of $2.8M. The Yearn team [managed to mitigate the exploit in 10minutes 14seconds](https://twitter.com/bantg/status/1357490497204453376), including [Tether freezing $1.7M USDT](https://twitter.com/paoloardoino/status/1357699423850156032) to prevent the bad actors from moving the assets.

### Story: [DMM DAO shuts down citing SEC investigation](https://twitter.com/dmmdao/status/1359193018079789057?lang=en-gb)
**TL;DR:** A DAO that brought real-world assets to the blockchain, using Chainlink oracles, seized their operations citing an ongoing investigation with the SEC.

### Story: [Blockfolio served offensive content after compromise](https://www.theblockcrypto.com/linked/94279/blockfolio-hacked-offensive-content-funds-safe)
**TL;DR:** During February, a bad actor gained access to the push notification system used by Blockfolio and sent offensive material to all Blockfolio users. It was [acknowledged and explained by SBF](https://twitter.com/SBF_Alameda/status/1359111190878720003) shortly after, with them [pushing blame on a competitor exchange](https://twitter.com/SBF_Alameda/status/1359111189142200326), stating "This offensive content was produced and published by a competitor exchange of ours."

### Story: [T-Mobile Sued Over SIM Attack That Resulted in Loss of $450K in Bitcoin](https://www.coindesk.com/t-mobile-sued-over-sim-attack-that-resulted-in-loss-of-450k-in-bitcoin)
**TL;DR:** SIM Swapping happens a lot in crypto (we've even [written a large article on it!](https://blog.mycrypto.com/the-sim-swapping-bible-what-to-do-when-sim-swapping-happens-to-you/)). This individual entity sued their mobile carrier after the loss of 15 Bitcoin from being SIM Swapped.

### Story: [DeFi Protocols Cream Finance, Alpha Exploited in Flash Loan Attack; $37.5M Lost](https://www.coindesk.com/defi-protocols-cream-finance-alpha-lose-37-5m-in-exploit-prime-suspect-idd)
**TL;DR:** A clever flash loan attack allowed for the operator to effectively drain the vaults of AlphaFinance. [FrankResearcher posted a twitter thread](https://twitter.com/FrankResearcher/status/1360513422689984512) with a summary of what happened. Shortly after, [AlphaFinance hints](https://twitter.com/AlphaFinanceLab/status/1360623172433760256) that they know who did it.

### Story: [Post-mortem of a local exploit on a MetaMask instance, stealing $8M](https://medium.com/@hugh_karp/nxm-hack-update-72c5c017b48)
**TL;DR:** An event that awakened the community about the dangers of blindly trusting a UI and accepting that what you once thought was trusted became untrusted. This post-mortem shows the extreme efforts a bad actor would go to to get hold of your funds by compromising your local machine. After [reviewing the malicious payload](https://twitter.com/bantg/status/1338603648683749376), we can confirm that it was "brilliantly" thought-out.

### Story: [Roll (social tokens) 3k ETH / $5.7M stolen](https://tryroll.com/security-incident-update/)
**TL;DR:** A platform issuing [social tokens](https://www.nasdaq.com/articles/social-tokens%3A-get-ready-for-the-next-massive-crypto-trend-2021-04-29) had an incident whereby one of their hot wallet private keys were compromised, and the attacker sold all the social tokens for ETH (which dumped the markets for those social tokens) and moved the ETH to another address [via TornadoCash](https://defipulse.com/tornado-cash).

### Story: [Twitter hacker pleads guilty, sentenced to 3 years](https://www.cyberscoop.com/twitter-hack-guilty-plea-graham-ivan-clark/)
**TL;DR:** Last year there was a massive account takeover campaign using internal Twitter tools to post from high value accounts, promoting a trust trading scam. Less than a year later, the hacker - an 18 year old - was found and pleaded guilty.

### Story: [Filecoin double-spend on Binance - $4.6M](https://www.coindesk.com/filecoin-double-deposit-on-binance-exploit-open-other-exchanges)
**TL;DR:** According to developers, Binance processed a legitimate deposit twice and credited the double funds offchain. The mistake occurred due to a reported bug in Filecoin’s RPC code.

![April-June](./images/2021-first-half-in-review-major-blockchain-crypto-hacks-scams-shutdowns/2.png "April - June")


### Story: [GitHub Actions being actively abused to mine cryptocurrency on GitHub servers](https://www.bleepingcomputer.com/news/security/github-actions-being-actively-abused-to-mine-cryptocurrency-on-github-servers/)
**TL;DR:** GitHub allows for servers to be spun up to run tests ([CI/CD](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)) on code. Entities are making use of these (free) servers to mine cryptocurrency - meaning they don't have the overheads of electricity/maintenance and instead profit from any block rewards.

### Story: [xFORCE contract hacked by whitehats (and others)](https://twitter.com/Mudit__Gupta/status/1378648170515759104)
**TL;DR:** The xFORCE contracts were not following the ERC20 standard too closely which allowed an exploit on the deposit mechanism, minting xFORCE tokens. One you had these xFORCE tokens (without actually depositing FORCE tokens), you could then withdraw FORCE tokens (for essentially free money).

### Story: [Validators drop from the Stellar network](https://status.stellar.org/incidents/7h0czw6mnjzs)
**TL;DR:** Due to a software bug, a group of validators on the Stellar network suddenly dropped, resulting in transaction disruptions. After some 10 hours, the issue had been identified and fixed, and validators were coming online again.

### Story: [Class action lawsuit filed against crypto wallet firm Ledger, Shopify over 2020 customer data breach](https://www.theblockcrypto.com/post/100860/ledger-shopify-class-action-lawsuit-filed)
**TL;DR:** A database of roughly 300,000 Ledger customer records (that detailed customer emails, physical shipping address, and full names) was dumped on a forum called RaidForums for free in 2020. A [class action suit was filed April 06 2021](https://www.scribd.com/document/502073705/Ledger-Shopify-Complaint#from_embed).

### Story: [More addresses got blacklisted from transferring USDC](https://etherscan.io/address/0x5db0115f3b72d19cea34dd697cf412ff86dc7e1b)
**TL;DR:** Although a relatively rare occurrence, Circle (the authority behind USDC) issued 7 more blacklist events for a handful of addresses. This allows for token confiscation, including the ability for Circle to prevent the address from spending (read: `transfer()`) the token. This comes as [the U.S. Department of The Treasury added them to the OFAC’s SDN List](https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20210415).

### Story: [$2B crypto scam: Turkish exchange Thodex goes silent, sparks user outcry](https://www.dailysabah.com/business/finance/2b-crypto-scam-turkish-exchange-thodex-goes-silent-sparks-user-outcry)
**TL;DR:** A Turkish exchange suddenly went quiet and it is speculated that the CEO fled to Thailand with the keys to $2B in cryptocurrency that belonged to the users of the exchange. Since then, a statement replaced the main webpage of Thodex detailing how they are going through negotiations with business partners and a cyber attack that modified some of their backend data. They state that the media is wrong about the $2B figure and it is much lower.

### Story: [UraniumFinance migration exploited - potential loss $50M](https://twitter.com/UraniumFinance/status/1387245696454041600)
**TL;DR:** A math error occurred when UraniumFinance changed their swap fees from 0.20% to 0.16% and caused an unintended calculation error that affected permitted swap fees. A single character in the contract caused the smart contract sanity checks to be exploited on balance checks, causing the UraniumFinance reserves to be drained.

#### Story: [US Law Enforcement confirm arrest of Roman Sterlingov, the operator of BitcoinFog](https://storage.courtlistener.com/recap/gov.uscourts.dcd.230456/gov.uscourts.dcd.230456.1.1_2.pdf)
**TL;DR:** BitcoinFog was a popular tool used to mix outputs with each other to add some degree of obscurity to Bitcoin transactions. Allegedly, BitcoinFog laundered ~1,200,000 Bitcoin over a 10 year period.

### Story: [xTokenMarket liquidity pools drained, loss of ~$25M](https://twitter.com/xtokenmarket/status/1392490733588946948)
**TL;DR:** [With clever flash loans](https://twitter.com/FrankResearcher/status/1392515198674681863), an attacker was able to drain the liquidity pools of xTokenMarket by manipulating the price of SNX and BNT in various DEX price feeds. The attack was performed via MEV software called Flashbots.

### Story: [DeFi100 exit scams with $32M](https://twitter.com/CryptoWhale/status/1396100822245777408)
**TL;DR:** A DeFi protocol exit-scammed with open messages taunting their users with “we scammed you guys and you can't do shit about it”. The next day, [they issued a statement](https://twitter.com/DEFI100/status/1396489770281226244) saying they did not exit scam and restored the website to its former state.

### Story: [Physical Ledger phishing campaigns](https://www.reddit.com/r/ledgerwallet/comments/o154gz/package_from_ledger_is_this_legit/)
**TL;DR:** Following the data breach in 2020 and the class action lawsuit against Ledger in early 2021, users started reporting more physical phishing campaigns to try and steal users keys. Bad actors would send a modified device to the shipping address they obtained from the data dumps.

### Story: [IronFinance bank run, token goes from ~$60 to $0 in less than 24hours](https://twitter.com/IronFinance/status/1405320650202419202)
**TL;DR:** According to an official statement, the bank run started after some whales began to remove liquidity from IRON/USDC pools and then sold $TITAN -> $IRON -> $USDC directly instead of redeeming $IRON, which caused the coins to lose their peg.

### Story: [The first known malicious attack on THORChain](https://medium.com/thorchain/eth-parsing-error-and-exploit-3b343aa6466f)
**TL;DR:** Due to a logic error with handling duplicate symbols, an exploit was executed that resulted in a loss of funds of ~$140k. The network was halted by nodes and patched, and functionality restored 6 hours later. THORChain acknowledged the exploit quickly and stated that their treasury will cover the loss in full.

## Observations
If we compare the observations from [the 2020 edition](/2020-in-review-major-blockchain-crypto-security-incidents), it seems the industry still has quite a bit of room to improve, and likely always will. We need continued education on DeFi “apeing” and DeFi admin keys, phishing vectors on everyday users, and the inherent risk of storing all your funds on centralised exchanges.

Compared to the first half of 2020, we have seen an improvement in centralised exchanges and their security, or at least there haven’t been as many publicised hacks taking place on their infrastructure. This is good, but also begs the question: where are bad actors focusing their attention? An easy, and probably correct guess, would be they are turning their attention to DeFi protocols and joining communities to pull easy rug pulls as it doesn’t require much effort and the monetary gain is noteworthy.

We have seen a significant rise of interest in the NFT scene, including big names adopting NFTs (ie: Christies, eBay, Sotheby’s). We can predict that there’ll be some expensive NFT heists coming - if not already occurring and just not reported too publicly.

Here’s hoping that the rest of 2021 is healthy!