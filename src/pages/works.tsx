import React from 'react'
//import { Link } from 'gatsby'
import Layout from '@layouts/main-layout'
import Piece from '@components/piece'
import SEO from '@components/SEO'

const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO
      title={'Works'}
      desc={'ポートフォリオ一覧'}
      pathname={'/works/'}
      article={false}
     />
     <div className="py-6 px-4 max-w-2xl mx-auto">
       <p　className="text-3xl sm:text-4xl tracking-wide font-semibold text-blue-900 text-center mb-4">Works</p>
        <Piece title={'なーこぉのポートフォリオサイト'}　date={'2020/8/22'} tech={['gatsby','tailwind','netlify']} link={'/'}>
          アウトプット専用のサイトです。<br/>
          なるべくなーこぉらしいサイトにするために、技術、知識だけではなく、自分自身のことも書いていこうと思います。
        </Piece>
      </div>
      <div className="py-6 px-4 max-w-2xl mx-auto">
        <Piece title={'prism-sapper-renderer'}　date={'2020/9/21'} tech={['sapper','svelte','rollup','typescript']} link={'/works'}>
          Sapper専用のシンタックスハイライトライブラリを作成しました。<br/> react向けに作られたprism-react-rendererをsapperでも使えるように改良し、加えて
          ラインハイライト(number or inline)関数も入れることで、簡単にハイライトを導入することができます。
          コードは<span><a href="https://github.com/nako0215/prism-sapper-renderer" 
          className="hover:text-blue-600" target="_blank"  rel="noopener noreferrer"
          >こちら</a></span>にあります。
        </Piece>
        </div>
        <div className="py-6 px-4 max-w-2xl mx-auto">
          <Piece title={'prism-sapper-rendererの説明書'}　date={'2020/9/24'} tech={['sapper','netlify']} link={'/works'}>
            prism-sapper-rendererの使い方を載せたホームページです。<br/>Sapperで作り、MDXと上記のprism-sapper-rendererを早速用いて作りました。
            <span><a href="https://akari0215.netlify.app/" 
            className="hover:text-blue-600" target="_blank"  rel="noopener noreferrer"
            >こちら</a></span>からどうぞ。
          </Piece>
        </div>
    </Layout>
  )
}

export default Contact