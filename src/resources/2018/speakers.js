// @flow
type Speaker = {
  furi: string,
  name: string,
  description: string,
  key: string,
  twitter?: string,
  github?: string,
  blog?: string,
  company: {
    name: string,
    uri: string,
  },
  title?: string[],
  session?: {
    name: string,
    description: string,
  },
}

export const ryuzee: Speaker = {
  furi: 'よしば りゅうたろう',
  name: '吉羽 龍太郎',
  twitter: 'ryuzee',
  key: 'ryuzee',
  blog: 'http://www.ryuzee.com/',
  title: ['株式会社アトラクタ 取締役最高技術責任者', 'アジャイルコーチ'],
  description:
    'アジャイル開発、DevOps、クラウドコンピューティング、組織改革を中心としたコンサルティングやトレーニングを提供。野村総合研究所、Amazon Web Servicesなどを経て現職。認定スクラムプロフェショナル（CSP） / 認定スクラムマスター（CSM） / 認定スクラムプロダクトオーナー（CSPO）。 Microsoft MVP for Azure。 著書に『Amazon Web Services企業導入ガイド』（マイナビ）、『SCRUM BOOT CAMP THE BOOK』（翔泳社）、『サーバ／インフラエンジニア養成読本 DevOps編』『Chef実践入門』（技術評論社）、『CakePHPで学ぶ継続的インテグレーション』（インプレス）、訳書に『変革の軌跡』（技術評論社）、『ジョイ・インク』(翔泳社)、『カンバン仕事術』（オライリー・ジャパン）、『Software in 30 Days』（アスキー・メディアワークス）など。',
  company: {
    name: '株式会社アトラクタ',
    uri: 'https://www.attractor.co.jp/about/',
  },
  session: {
    name: 'Effective Team Building',
    description:
      'ソフトウェア開発のコンサルティングを多数行ってきた経験上、プロジェクトやプロダクトを成功させるためには、よい要求とよいチームが必要です。 ダメな要求をよいチームに渡してもダメなものしかできません。よい要求をよくないチームに渡しても結果は芳しくありません。 本セッションでは、よいチームをどのようにして作っていくべきか、その方法を説明します。',
  },
}

export const shoyoshi: Speaker = {
  furi: 'よしはら しょうざぶろう',
  name: '吉原 庄三郎',
  key: 'shoyoshi',
  title: ['株式会社ウフル　デリバリーイノベーション本部 本部長'],
  description:
    'ITアーキテクトとして数多くのミッションクリティカルシステムの再構築を手掛けた後、ITコンサルタントとして独立する。大手出版社などに予算獲得から要件定義までのプロジェクト立ち上げプロセスを導入したり、全社横断的なプロジェクト監査プロセスを導入する。その後、ITコンサルティングファームに移籍し、大手製造業の基幹システムの再構築を支援する。同ファームにアジャイル推進組織を立ち上げ、エンタープライズ領域におけるアジャイル開発の導入支援を行う。 著書に、「はじめての設計をやり抜くための本」（翔泳社）がある。',
  company: {
    name: '株式会社ウフル',
    uri: 'http://uhuru.co.jp/about/',
  },
  session: {
    name: '組織再生とアジャイル',
    description:
      'アジャイルの考え方は企業の組織再生にも応用できます。組織を再生するには仕事のやり方（プロセス）を変更するだけでなく、そもそものマインドセットを変える必要がある。アジャイルの考え方を組織再生に適用した事例をご紹介します。',
  },
}

export const ma2shita: Speaker = {
  furi: 'まつした こうへい',
  name: '松下 享平',
  key: 'ma2shita',
  title: [
    '株式会社ソラコム　テクノロジー・エバンジェリスト　事業開発マネージャー',
  ],
  description:
    '株式会社ソラコムの事業開発マネージャーとして主にデバイスの企画を担当しながら、エバンジェリストとして、SORACOMサービスを企業・開発者により理解、活用いただくための講演活動を担当。 90年代半ばの地方ISPの立ち上げをキャリアスタートとし、主にインターネットを取り扱ったシステムインテグレーターを経て、2000年よりぷらっとホーム株式会社にて、ネットワークインフラやEC事業を担当。 2015年からはIoTソリューションをリードし、メガクラウドベンダーとの協業や、サブギガ/BLEを用いたIoTシステム構築といった業界の先駆的なIoT導入事例に関わる。',
  company: {
    name: '株式会社ソラコム',
    uri: 'https://soracom.jp/share/company/',
  },
  session: {
    name: '疎結合で非同期なソラコムの開発スタイル',
    description:
      'ます。お客様からのフィードバック元に新サービスや新機能の開発を行うソラコムの開発スタイルや、非同期組織の作り方、リーダーシップステートメントや組織の特徴についてご紹介します。',
  },
}

export const seratch: Speaker = {
  furi: 'せら かずひろ',
  name: '瀬良 和弘',
  key: 'seratch',
  twitter: 'seratch_ja',
  github: 'seratch',
  title: [
    'スマートニュース株式会社 ヴァイス・プレジデント エンジニアリング担当',
  ],
  description:
    'グローバル展開を目指すスタートアップ企業で VPoE として日々チームビルディングやエンジニア組織の構築に取り組んでいます。システムインテグレータ、エムスリー株式会社を経て現職。個人のエンジニアとしては Scala というプログラミング言語が好きで、いくつかの OSS プロジェクトを始めたり、コミュニティ活動を行ったりしています。最近の趣味は英語学習。',
  company: {
    name: 'スマートニュース株式会社',
    uri: 'http://about.smartnews.com/ja/about/',
  },
  session: {
    name: '自社サービス企業におけるエンジニアリングチームマネージメント',
    description:
      'SI 業界を経た後、前職・現職と自社サービスを運営する企業でチームのチームメンバー・マネージャ両方の立場での経験をする中で、その喜びとその難しさに向き合ってきました。企業は生き物であり、特に独自のサービスを運営する企業は常に時代の変化に合わせて自分自身を変え続ける必要があります。このトークでは、私のエンジニアリングマネージャとしての経験を元に、個々人のキャリアと組織の成長の接点を長く持ち続けるために大事だと考えていることについてお話しいたします。',
  },
}

export const tatsuo310: Speaker = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学　経済科学部准教授'],
  description:
    'SIerにて多くのシステム開発にプロジェクトマネジャーとして参画し、本社セクションの技術部長、プロジェクトマネジメント部長などを経て、2016年より現職。技術経営、アジャイル、UX/HCD、プロジェクトマネジメントなどの領域を複合的にカバーし、新たな価値創造型のマネジメントモデルの構築を目指している。Ph.D. ,MOT, PMP, CSPO, CSM',
  company: {
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/',
  },
  session: {
    name: 'マネジメントの歴史からみるチームビルディングの未来',
    description:
      '多くのエンジニアにとってチームとの関係性は重要なテーマだと思います。マネジメントのスタイルが変われば、チームのスタイルも変わります。本セッションではマネジメントの歴史を振り返りながら、これからのチームビルディングについて考えてます。',
  },
}

export const mkiskt: Speaker = {
  furi: 'むかい さきと',
  name: '向井 咲人',
  key: 'mkiskt',
  twitter: 'mki_skt',
  description:
    '広島経済大学を卒業後、東京のIT人材ベンチャー企業に営業として新卒入社。その後、広島のWEBベンチャー企業にフロントエンジニアとして参画。2017年3月からヤフー株式会社でフロントエンジニアとして活動中。東京で活動しながらも、広島の勉強会の立ち上げや登壇も積極的に行なっている。',
  company: {
    name: 'ヤフー株式会社',
    uri: 'http://docs.yahoo.co.jp/info/company/',
  },
  title: ['ヤフー株式会社　フロントエンジニア'],
  session: {
    name: '広島と東京を経験したエンジニアが考えるチームビルディング',
    description:
      '私はベンチャー企業と大企業を体験しました。ベンチャー企業の方は大企業が気になり、大企業の方はベンチャー企業が気になるかと思います。今回、私のセッションでは、両者の違いとそれを踏まえてチームメンバーとしてできることと、リーダーにお願いしたいことをお話しします。',
  },
}

export const mao: Speaker = {
  furi: 'あべ しんすけ',
  name: '阿部 信介',
  key: 'mao',
  title: ['株式会社リゾーム エンジニア'],
  description:
    'パチンコ店向けの施設ハードウェア開発を行う会社のデータ分析アプリケーションの開発とサポートエンジニア、SES/客先常駐のソフトハウス、某通信教育大手システム子会社での社内システム開発を経て、商業施設向けのCRMや出店管理ソリューションを提供する現職。現職では、OEM開発チームの立て直し、新規サービス開発チームの立ち上げとリリース、自社パッケージ開発チームでの保守・カスタマイズ開発のテコ入れなどに携わっています。 前職在籍中にすくすくスクラム瀬戸内に出会い、「チーム」を仕事のテーマとして取り組むようになりました。今のチームと未来のチームをどう繋ぐか、を考えながら、チームと一緒に仕事をしています。 趣味は(業の深い)読書、囲碁、自重トレーニング、カポエイラ。',
  company: {
    name: '株式会社リゾーム',
    uri: 'https://www.rhizome-e.com/',
  },
  session: {
    name: 'プロジェクトXのないチームを目指したマネージャが取り組んだこと',
    description:
      'マネージャが目立つのは有事だけで十分で、それもないのがベストです。どうしたら、プロジェクトXのようなことが起こらず、メンバーが活躍する姿が見えるだけのチームになっていくのか？そのことを考えながらチームに入って、いくつかの取り組みを続けてきました。 まだまだ道半ばではありますが、私のアプローチを振り返ってみたいと思います。',
  },
}

export default [ryuzee, shoyoshi, ma2shita, seratch, tatsuo310, mkiskt]
