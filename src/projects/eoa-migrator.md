---
slug: "eoa-migrator"
title: "EOA Migrator"
summary: "An application that helps you migrate assets belonging to an EOA"
meta_img: /images/eoa-migrator/meta.png
meta_desc: "An application that helps you migrate assets belonging to an EOA"
type: project
hidden: false
project_url: "https://eoa-migrator.harrydenley.com"
---

![Banner](./images/eoa-migrator/banner.png)

## Intro
With account-based blockchain, such as EVM, there comes a time when you want to migrate your assets from one externally-owned account (EOA) to another address. With the nature of EVM chains, there are a lot of different assets that an account can own; ERC20 Tokens, ERC721/ERC1115 Tokens, Owned Contracts.

This tool collects all your assets and gives you a UI to prompt your wallet to transfer your assets to your identified safe address.

A safe address is identified by signing a message with the keypair so that the application is certain there is no mistyping your safe address and leading to asset loss.

### 1. Connect your wallet

To start, you connect your wallet to the application that you want to discover and move your assets. The application will consider this address as "compromised", as in the intention is to move your assets from it.

### 2. Identify your safe address

By signing an offchain message, the application can know for certain that you own the address your assets will be sent to, and you won't be sending them to an address that you don't own entirely or don't own partially (ie: an exchange deposit address)

### 3. Scan for your assets

After you have done the first two steps, the application will scan for your assets (ERC20, NFTs, owned contracts) and give you a button to move the asset, onchain, to your identified safe address.

Note: moving the asset to your identified safe address will cost gas as it is in onchain transaction.

You can self-host this application also;

* [eoa-migrator-api](https://github.com/409H/eoa-migrator-api) - easy to deploy to Heroku, just plug in your API keys
* [eoa-migrator](https://github.com/409H/eoa-migrator) - install dependencies and serve the UI