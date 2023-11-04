export type PostEntity = {
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
