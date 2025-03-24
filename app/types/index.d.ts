import type { MarkdownParsedContent } from '@nuxt/content'

export interface PostTileEntity extends MarkdownParsedContent {
  title: string
  slug: string
  posted_at: string
  intro: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export interface PostEntity extends MarkdownParsedContent {
  title: string
  slug: string
  posted_at: string
  intro: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export type Project = 'midnite' | 'moonsgameguides' | 'screenshottedit' | 'printed' | 'widgeter'

export type Challenge = {
  name: string
  slug: string
  intro: string
  challenge_url: string
}
