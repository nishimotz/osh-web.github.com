import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => [
    {
      path: '/',
    },
    {
      path: '/about/',
    },
    {
      path: '/2017/',
    },
  ],
  webpack:
    (config, { defaultLoaders }) => {
      config.module.rules = [{
        oneOf: [
          defaultLoaders.jsLoader,
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?modules'],
          },
          defaultLoaders.fileLoader,
        ]
      }]
      return config
    },
  Html: ({ Html, Head, Body, children }) => {
    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
      <Html lang="ja-jp">
        <Head>
          <meta name="viewport" content="width=devise-width, initial-scale=1" />
          <title>オープンセミナー広島</title>
          <link
            href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
            rel="stylesheet"
          />
          {styleTags}
        </Head>
        <Body>{newChildren}</Body>
      </Html>
    )
  },
}
