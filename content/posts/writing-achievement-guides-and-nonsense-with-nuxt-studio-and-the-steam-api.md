---
id: 8
posted_at: 2024-06-24T00:03:00.000Z
slug: writing-achievement-guides-and-nonsense-with-nuxt-studio-and-the-steam-api
title: Writing achievement guides and nonsense with Nuxt Studio and the Steam API
category: javascript
tags: []
intro: A shiny new Nuxt module called Nuxt Studio, an editor for Nuxt Content websites, has officially released. I was lucky enough to get early access on the waiting list so I needed an excuse to make full use of it.
---

A shiny new Nuxt module called Nuxt Studio, an editor for Nuxt Content websites, has officially released. I was lucky enough to get early access on the waiting list so I needed an excuse to make full use of it. I've started writing achievement guides for games towards the end of 2023 and having a CMS to write them would be great for my productivity.

When I picked it up, content was written directly in Markdown, with the ability to create and edit markdown files, use custom Vue components and upload images. At the time of writing, the Nuxt Studio team just launched Nuxt Studio v2 with a complete redesign and "Notion-like editor". I'm actually using it right now to write this post. It has live collaboration for teams, live preview, drafts and easy integration into any Nuxt project.

![Nuxt Studio editor](/images/posts/nuxt-studio-1.jpeg)

I started building Moon's Game Guides in December 2023 with the intention of writing my achievement guides in Nuxt Studio and then porting them over to Steam, as well as having my own designed website for them to live. I already had 4 guides written on Steam so that allowed some foundations on how it should look.

One of my favourite features of Nuxt Content is the ability to use custom Vue components in the markdown files. For example, on achievement guides I can create an :prose-code-inline[Achievement.vue] component that has the image, title and description of the achievement, as well as using component slots for rendering any other content such as YouTube videos and a checkbox to allow tracking the completed state.

![Nuxt Studio component props sidebar editor for achievement component](/images/posts/nuxt-studio-2.jpeg)

I started playing with the [Steam API](https://steamcommunity.com/dev), not too much longer after that. The main thing I was eyeing up was the News API that allowed me to pull latest news for the games I've set up, from Steam itself, as well as some partnered news providers like PC Gamer, VG247, PCGamesN and Rock, Paper, Shotgun.

The partnered providers come with an excerpt of the articles in HTML and the Steam articles come in full in BBCode. Those ones in particular were a little difficult, as it required a BBCode to HTML parser. There weren't many parsers out in the wild that converted Steam's own BBCode tags properly and could be extended with custom tags that it uses so I created my own parser using regex for converting BBCode tags to HTML tags. This was a great point in the project to use [Vitest](https://vitest.dev/) for TDD, as I had a plethora of test cases from the Steam API to test against to make sure the content was displayed properly.

![News modal for a Starfield post from VG247](/images/posts/mgg-modal.jpeg)

I had a Steam API key, so I wanted to make the most of it. I started playing with the other endpoints Steam had to offer. While the API isn't amazing, I could get a decent amount of data such as basic game information, achievements, assets, player counts, my user profile and my recently played games. This allowed me to create scripts to automatically create game pages, with achievement sections and player counts. Here is the game page for THE FINALS.

![The Finals game page](/images/posts/mgg-the-finals.jpeg)

And here is Starfield, with a news feature block and an achievement feature block.

![Starfield game page with news and achievements feature blocks](/images/posts/mgg-starfield.jpeg)

I could also create my profile page that showed what game I'm currently playing, my recently played games and a Year in Review showcase.

![mgg-profile.jpeg](/images/posts/mgg-profile.jpeg)

I'm still having fun implementing new ideas into the site. It's been a good opportunity to get more experience with a modern stack using Nuxt 3, TypeScript, UnoCSS and Vitest.
