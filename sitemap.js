/* eslint-disable no-console */
const fs = require('node:fs')

function buildSitemap () {
  const baseUrl = 'https://liamsnowdon.uk'

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ]

  const baseRoutes = [
    '',
    '/posts',
  ]

  baseRoutes.forEach((route) => {
    xml.push(
      '<url>',
      `<loc>${baseUrl}${route}</loc>`,
      '</url>',
    )
  })

  fs.readdirSync('./content/posts').forEach((post) => {
    const [route] = post.split('.')
    xml.push(
      '<url>',
      `<loc>${baseUrl}/posts/${route}</loc>`,
      '</url>',
    )
  })

  xml.push('</urlset>')
  return xml.join('')
}

function init () {
  const xml = buildSitemap()

  fs.writeFileSync('public/sitemap.xml', xml)
  console.log('Saved sitemap to public/sitemap.xml')
}

init()
