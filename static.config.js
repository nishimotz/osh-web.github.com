import React from 'react'

export default {
  siteRoot: 'https://osh-web.github.io/',
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/home',
    },
    {
      path: '/2018/',
      component: 'src/pages/2018/home',
    },
    {
      path: '/about/',
      component: 'src/pages/about',
    },
    {
      path: '/history/',
      component: 'src/pages/history',
    },
 ],
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja-JP">
      <Head>
        <meta name="viewport" content="width=devise-width, initial-scale=1" />
        <title>オープンセミナー広島</title>
        <link
          href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css"
                integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX"
                crossOrigin="anonymous" />
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
                    integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0"
                    crossOrigin="anonymous" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: ["react-static-plugin-sass"],
}
