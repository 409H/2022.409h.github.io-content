---
slug: "sanctioned-addresses-on-ethereum"
title: "Sanctioned addresses on Ethereum"
date: 2022-04-20 00:00:00 +0100
type: blog
meta_img: /images/.common/meta.png 
meta_desc: "There are sanctioned addresses at the smart contract level on Ethereum. But what are they?"
comments: true
hidden: false
tags: "compliance,security,analysis"
---

https://twitter.com/sniko_/status/1514982907819044875

### USDT Blacklist
BitFinex MultiSig (`0xC6CDE7C39eB2f0F0095F41570af89eFC2C1Ea828`) has the ability to call `addToBlacklist()` on the USDT contract to prevent an address from moving their owned USDT.

<embed type="text/html" src="https://dune.com/queries/607020/1133742" width="1024" height="1024" />

### ChainAnalysis Sanctioned Addresses
ChainAnalysis EOA (`0xDF900dC8991474ab9d69F2c3b9C900c055fb36CD`) has the ability to call `addToSanctionsList()` with any addresses to add them to an on-chain database.

As of right now (2022-04-15), this on-chain database is only used by frontends. Direct use of contracts (whereby those frontend contracts consume this Sanctions list) will bypass any restrictions set on the sanctioned address.

<embed type="text/html" src="https://dune.com/queries/607033/1133523" width="1024" height="1024" />