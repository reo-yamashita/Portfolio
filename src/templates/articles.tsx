import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '@layouts/main-layout'
import SEO from '@components/SEO'
import Category from '@components/category'
import PageMove from '@components/page_move'
import { ArticleQuery } from '@@/gatsby-graphql'

export const query = graphql`
  query Article ( $slug: String! ) {
    post:  mdx (fields: { slug: { eq: $slug } }) {
      fields{
            slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        learning_Point
      }
      body
   }
  }
`
type Props = {
  data: ArticleQuery 
}

const Blog: React.FC<Props & PageProps> = ( { data, pageContext}) => {

const page_arrow = pageContext
return (
  <Layout >
    <SEO
      title={data.post.frontmatter.title}
      desc={`${data.post.frontmatter.learning_Point}`}
      pathname={`/blog${data.post.fields.slug}`}
      article
    />
    <nav className="p-3"> 
      <Category/>
    </nav>
    <div className="p-2 sm:p-4 max-w-2xl mx-auto"> 
      <div className="m-3">
        <h2 className="select-none inline-block text-2xl sm:text-3xl font-bold tracking-wide ">
          {data.post.frontmatter.title}
        </h2> 
        <div className="flex items-center leading-none">
          <p className="text-sm select-none text-gray-800 opacity-75s pt-1 pl-3">
            posted on {data.post.frontmatter.date}
          </p>
        </div>
      </div>
      <div className="p-3 text-sm sm:text-base text-black"> 
        <MDXRenderer>
          {data.post.body} 
        </MDXRenderer>
      </div>
      <PageMove  arrow={page_arrow}/>
    </div>
</Layout>
    )
}

export default Blog