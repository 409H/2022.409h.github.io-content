---
slug: "changing-the-backend-of-my-website"
title: "Changing the backend of my website"
date: "2022-27-02 00:00:00 +0000"
type: blog
comments: true
hidden: false
---

Over the weekend, I decided to change my website build process from [Jekyll](https://jekyllrb.com/) to a [Gatsby](https://www.gatsbyjs.com/) build. It didn't take too long to do, actually the biggest time sink was migrating the content format from my old `ul.li` lists into markdown and JSON files to import into GraphQL.

Now, instead of one giant repository, new website is stored in two repositories. One repo to hold the Gatsby setup with `gatsby-node.js` reading from the other repository, which holds only the content (mostly markdown files and images). It is much cleaner!