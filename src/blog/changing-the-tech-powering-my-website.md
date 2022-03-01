---
slug: "changing-the-tech-powering-my-website"
title: "Changing the tech powering my website"
date: "2022-02-27 00:00:00 +0100"
type: blog
meta_img: /images/changing-the-tech-powering-my-website/meta.png 
comments: true
hidden: false
---

![/images/changing-the-tech-powering-my-website/meta.png](./images/changing-the-tech-powering-my-website/meta.png)

Over the weekend, I decided to change my website build process from [Jekyll](https://jekyllrb.com/) to a [Gatsby](https://www.gatsbyjs.com/) build. It didn't take too long to do, and I feel like I have more flexibility with how my website functions and what I can offer with it, especially since the ecosystem around Gatsby and ReactDOM is so big.

Now, instead of one giant repository, new website is stored in two repositories. One repo to hold the Gatsby setup with `gatsby-node.js` reading from the other repository, which holds only the content (mostly markdown files and images). It is much cleaner!

I am still migrating content over, but the bulk of it is here.

## New shiny things!

A number of new shiny things are here at the new launch and many more will come!

#### Ethereum Wei Converter

I have published a tool that I built that helps me quickly calculate the cost of a specific type of transfer at any GWEI cost. It will show you the cost in USD at the current ETH price (price feed fetched from [CoinGecko](https://coingecko.com))

![/images/changing-the-tech-powering-my-website/2.png](./images/changing-the-tech-powering-my-website/2.png)

👉 Check it out: [wei](/tools/wei)

#### Toggle Blogs

As I am moving a lot of my content posted on third-party domains to here, the Blog section can become quite big. So, I've added a quick toggle to change the view from showing the 10 most recent blog entries to all of them.

![/images/changing-the-tech-powering-my-website/1.gif](./images/changing-the-tech-powering-my-website/1.gif)

#### Donate Component

I created this component on a different project (soon to be released) and thought I may as well install it on my personal website - there's no harm in that 😅. At the footer of my website, you'll see a donation component that has 4 different tiers to donate. Clicking each will allow you to quickly donate to my efforts through WalletConnect (and thus all the supported mobile apps) and via your browser wallet (such as MetaMask). Once clicked, it will prompt your wallet to send the chosen amount of ETH to my address.

![/images/changing-the-tech-powering-my-website/3.gif](./images/changing-the-tech-powering-my-website/3.gif)

### New deployment system!

Instead of relying on [GitHub pages to build and deploy a Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll), I am now managing the website in two repositories.

When I add new content file (blog post, project post, external link referencing my name/projects), on the push to the `master` branch, it sends a webhook request to [Netlify](https://www.netlify.com/) to trigger a build and deploy of the Gatsby site.

### New visuals and better mobile support

Although subtle, my website has some new visuals and now better responsiveness/mobile support! 