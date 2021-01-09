import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "@layouts/main-layout"
import SEO from "@components/SEO"
import TopPosts from "@/components/top_posts"
import Header from "@/components/header"

const TopPostsArray = [
  {
    title: "Works",
    to: "works",
    color: { hover_bg: "hover:bg-indigo-50", text: "text-indigo-300" },
  },
  {
    title: "Blog",
    to: "bloglist",
    color: { hover_bg: "hover:bg-red-50", text: "text-red-300" },
  },
  {
    title: "About me",
    to: "myself",
    color: { hover_bg: "hover:bg-lightblue-50", text: "text-lightblue-300" },
  },
]

const Home = () => {
  const data = useStaticQuery(graphql`
    query top_img {
      logo: file(relativePath: { eq: "Near_Closer.png" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={"top"}>
      <SEO
        title={"Home"}
        desc={"portfolio top page"}
        pathname={"/"}
        article={false}
      />
      <Header />
      <div className="my-8">
        <div className="w-52 opacity-80 rounded-full overflow-hidden shadow-xl mx-auto">
          <Img fluid={data.logo.childImageSharp.fluid} alt="My logo" />
        </div>
        <div className="grid grid-flow-row sm:grid-cols-2 gap-4 sm:max-w-2xl max-w-lg mx-auto pt-8">
          {TopPostsArray.map((item, key) => (
            <Link to={`${item.to}`} key={key}>
              <TopPosts title={`${item.title}`} color={item.color}>
                {item.desc}
              </TopPosts>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
