---
slug: "ens-timekeepers-community-twitter-account"
title: "ENS #TimeKeepers community Twitter account"
summary: "You are an ENS Timekeeper? Then they have shared access to this Twitter account"
meta_img: /images/ens-timekeepers-community-twitter-account/meta.png
meta_desc: "You are an ENS Timekeeper? Then they have shared access to this Twitter account"
type: project
comments: true
hidden: false
---

![Banner](./images/ens-timekeepers-community-twitter-account/banner.png)

### 👉 [Go to the App](/projects/ens-time-keepers)

I recently came across a very niche "subsection" of the EthereumNameService that involved people minting ENS names around the 24H clock. Why? I'm not sure. But they have a cool website: [ENSClock](https://ensclock.com/).

Over a weekend in May 2022, I thought it would be a good use of my time 😅 to create a small project to allow those who own part of the clock to tweet from a "community owned Twitter account" by authenticating users who owned a time to tweet only on the hour they have the ENS name for. For example, if you own 14h20.eth then you can tweet every day but only if it is between 1400UTC and 1459UTC (inclusive).

I'm excited to see where the community takes the bot (and how soon it gets suspended 😂).

The flow of the application is as follows:

* User connects their Web3 wallet (via MetaMask or WalletConnect)
* User identifies their #TimeKeepers ENS name
* User crafts a tweet to send
* User signs a message with their #TimeKeepers ENS name and tweet message
* Once the cryptographically signed message is verified, the tweet is tweeted on [@EnsTimeKeepers](https://twitter.com/EnsTimeKeepers)

(Note; on every tweet it will identify who's tweeted it by adding "Tweeted by 99h99.eth" as the final line)

### 👉 [Go to the App](/projects/ens-time-keepers)