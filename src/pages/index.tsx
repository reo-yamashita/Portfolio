import React from "react"
import { Link } from 'gatsby'
import Layout from '@layouts/main-layout'
import SEO from '@components/SEO'
import TopPosts from '@components/top_posts'
import Header from '@components/header'

const TopPostsArray: {[key: string]: string}[] = [
  {title: 'Works', to: 'works', color: 'indigo-100',desc: 'All web site I create'},
  {title: 'Blog', to: 'bloglist', color: 'blue-100', desc: 'Blogs about technical things'},
  {title: 'About me', to: 'myself', color: 'indigo-100', desc: 'The description about Who I am'},
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
      <div className="mt-12 ">
        <div className="text-center mb-4">
          <p className="select-none tracking-wider mx-auto text-blue-900 text-4xl font-medium">Content</p>
        </div>
        <div className="grid grid-flow-row sm:grid-cols-2 gap-2 sm:max-w-5xl max-w-lg mx-auto">
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
