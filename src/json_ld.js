import React, { Component } from 'react'

export default () => {
  const structedData = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    location: {
      '@type': 'Place',
      name: 'サテライトキャンパスひろしま 501 502',
      address: {
        '@type': 'PostalAddress',
        addressCountry: '日本',
        addressRegion: '中国地方',
      },
    },
    name: 'オープンセミナー2019@広島',
    description:
      'IT技術者のボランティアによる中四国最高のセミナーイベント',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: '円',
    },
    startDate: '2019-02-23',
    endDate: '2019-02-23',
  }
  const json = JSON.stringify(structedData)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
