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
        <Piece title={'なーこぉの技術ブログ'}　date={'2020/8/22'} tech={['gatsby','tailwind','netlify']} link={'/'}>
          インプットで得た知識、技術を整理するためにこのブログを作りました。<br/>ありきたりな説明ではなく、自分の経験をもとにして書いています。
        </Piece>
      </div>
    </Layout>
  )
}

export default Contact