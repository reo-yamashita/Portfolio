const SiteConfig = {
  pathPrefix: '/',
  title: 'なーこぉの技術ブログ', // タイトル
  titleAlt: 'なーこぉの技術ブログ', // JSONLDのためのタイトル
  description: 'プログラミングに関する知識、技術を整理するためのアウトプットブログです',
  url: 'https://nako-tech-blog.work', // スラッシュなしのサイトURL
  siteURL: 'https://nako-tech-blog.work/', // スラッシュありのサイトURL
  siteLanguage: 'ja', // HTMLの言語（ここでは日本語）
  logo: '/images/logo1.png',
  banner: '/images/logo1.png',
  favicon: 'static/images/logo1.png', // ファビコン
  shortName: 'なーこぉの技術ブログ', // サイトの略称、12文字以下
  author: 'なーこぉ', // schemaORGJSONLDの作成者
  themeColor: '#90cdf4',
  backgroundColor: '#d3e0ff',
  social: {
    twitter: `@0215nibunibu`,
    github: `nako0215`,
    qitta: `nibu0215`,
  },
};

export default SiteConfig