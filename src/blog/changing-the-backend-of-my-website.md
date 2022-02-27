---
slug: "changing-the-backend-of-my-website"
title: "Changing the backend of my website"
date: "2022-02-27 00:00:00 +0000"
type: blog
comments: true
hidden: false
---

Over the weekend, I decided to change my website build process from [Jekyll](https://jekyllrb.com/) to a [Gatsby](https://www.gatsbyjs.com/) build. It didn't take too long to do, actually the biggest time sink was migrating the content format from my old `ul.li` lists into markdown and JSON files to import into GraphQL.

Now, instead of one giant repository, new website is stored in two repositories. One repo to hold the Gatsby setup with `gatsby-node.js` reading from the other repository, which holds only the content (mostly markdown files and images). It is much cleaner!

### New shiny things!

With this new setup on Gatsby, I can now plugin (and build my own) React components for my website. I now have a (at current time of writing) basic [Wei Converter Calculator](/tools/wei-converter/) tool and in the footer and some basic Web3 integration (using [Web3Modal](https://github.com/Web3Modal/web3modal)) to help those who wish to donate to my research. Clicking on an amount will give a prompt to donate via a browser injected Web3 provider (such as MetaMask) or via your mobile wallet using [WalletConnect](https://walletconnect.com/).

### New deployment system!

Instead of relying on [GitHub pages to build and deploy a Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll), I am now managing the website in two repositories.

When I push a new content file (blog post, project post, external link referencing my name/projects), on the push to the `master` branch, it send a webhook request to [Netlify](https://www.netlify.com/) to trigger a build of the Gatsby site.

### New content administation

I now have a repository holding _only_ the content and these content files are stored in directories;

```
| src/
    | blog/
        | images/
            | changing-the-backend-of-my-website/
        | changing-the-backend-of-my-website.md
    | external/
    | projects/
```

This is a much more cleaner way for me to manage my content as before I had everything in a flat directory called `posts/` and `posts/images/` with the [Jekyll](https://jekyllrb.com/) setup.

I also make more use of [frontmatter](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) in the content markdown files, which is consumed within the GraphQL server on the Gatsby side of things.