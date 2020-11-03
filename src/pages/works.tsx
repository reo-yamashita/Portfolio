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
      {/* <div className="py-6 px-4 max-w-2xl mx-auto">
        <Piece title={'prism-sapper-rendererの説明書'}　date={'2020/9/24'} tech={['sapper','netlify']} link={'/works'}>
          prism-sapper-rendererの使い方を載せたホームページです。<br/>Sapperで作り、MDXと上記のprism-sapper-rendererを早速用いて作りました。
        </Piece>
      </div> */}
    </Layout>
  )
}

export default Contact