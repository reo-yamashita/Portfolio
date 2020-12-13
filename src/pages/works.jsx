import React from 'react'
import Layout from '@layouts/main-layout'
import Piece from '@/components/piece'
import SEO from '@components/SEO'

const Contact = () => {
  return (
    <Layout>
      <SEO
      title={'Works'}
      desc={'works list'}
      pathname={'/works/'}
      article={false}
     />
     <div className="py-6 px-4 max-w-2xl mx-auto">
       <p　className="text-3xl sm:text-4xl tracking-wide font-semibold text-lightblue-800 text-center mb-4">Works</p>
        <Piece title={'なーこぉのポートフォリオサイト'}　date={'2020/8/22'} tech={['gatsby','tailwind','netlify']} link={'/'}>
          アウトプット専用のサイトです。<br/>
          なるべくなーこぉらしいサイトにするために、技術、知識だけではなく、自分自身のことも書いていこうと思います。
        </Piece>
      </div>
    </Layout>
  )
}

export default Contact