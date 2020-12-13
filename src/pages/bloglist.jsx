import React from 'react'
import { graphql ,useStaticQuery } from 'gatsby'
import Layout from '@layouts/main-layout'
import SEO from '@components/SEO'
import BlogListParts from '@/components/bloglist_parts'
import Category from '@/components/category'

const BlogList = () => {

const data = useStaticQuery(graphql`
  query AllPosts {
    allPosts:  allMdx(
    sort: {fields : frontmatter___date, order: DESC }){
      edges {
        node{
          excerpt(
            pruneLength : 140
            truncate  :true
          )
          frontmatter {
            title
            date (formatString: "MMMM Do, YYYY")
            learning_Point
            tags
          }
          fields{
            slug
          }
        }
      }
    }
  }
`)

return (
  <Layout>
    <SEO
      title={'Article'}
      desc={'article list'}
      pathname={'/bloglist/'}
      article
    />
    <div className="pt-12 w-full">
      <div className="flex  w-10/12  mx-auto px-4 md:pl-40 md:pr-8 md:pb-6 max-w-6xl">
        <h2 className="flex-1 text-3xl md:text-4xl font-extrabold tracking-wide text-lightblue-800">Blog</h2>
        <nav className="flex-1 mx-3 my-1 flex"> 
          <Category/>
        </nav>
      </div>
    </div> 
    <div className="pt-4">
      <div className=" w-10/12 mx-auto px-4 md:pl-40 md:pr-8 max-w-6xl">
        <div className="mb-6 pt-4 fadeIn_animation mx-auto">
          <div className="space-y-12">
          {data.allPosts.edges.map( ({node}) => {
            return(
              <BlogListParts node={node} key={node.fields.slug}/>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  </Layout>    
)}

export default BlogList