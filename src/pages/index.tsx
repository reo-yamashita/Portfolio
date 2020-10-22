import React from "react"
import { Link } from 'gatsby'
import Layout from '@layouts/main-layout'
import SEO from '@components/SEO'
import TopPosts from '@components/top_posts'
import Header from '@components/header'

const TopPostsArray: {[key: string]: string}[] = [
  {title: 'Works', to: 'works', color: 'indigo-100',desc: '作成したものすべて'},
  {title: 'Blog', to: 'bloglist', color: 'blue-100', desc: '思ったこと、学んだこととか'},
  {title: 'About me', to: 'myself', color: 'indigo-100', desc: 'なーこぉの簡単な自己紹介'},
]

const Home = () => {

return (
  <Layout location={'top'}>
      <SEO
        title={'Home'}
        desc={'なーこぉの技術ブログTopページ'}
        pathname={'/'}
        article={false}
      />
      <Header />
      <div className="mt-12">
        <div className="text-center mb-4">
          <p className="select-none tracking-wider mx-auto text-blue-900 sm:text-4xl text-3xl font-medium sm:my-12">Content</p>
        </div>
        <div className="grid grid-flow-row sm:grid-cols-2 gap-4 sm:max-w-5xl max-w-lg mx-auto">
        { TopPostsArray.map( (item, key) => 
          <Link to={`${item.to}`} key={key}>
            <TopPosts title={`${item.title}`} color={`${item.color}`}>
              {item.desc}
            </TopPosts>
          </Link>
        )}
        </div>
      </div>
    </Layout>
  ) 
}

export default Home
