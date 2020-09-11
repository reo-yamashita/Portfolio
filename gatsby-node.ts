import type { GatsbyNode } from "gatsby"
import { createFilePath } from 'gatsby-source-filesystem';
import { AllNodeTypeQuery } from './gatsby-graphql'
const path = require("path")

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/articles.tsx")
  const tagsTemplate = path.resolve("./src/templates/tags.tsx")

 return await graphql<AllNodeTypeQuery>(`
  query AllNodeType {
    allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        previous {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
        next {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
        node {
          fields {
            slug
          }
        }
      }
    }
    groups: allMdx (sort : { fields : frontmatter___date, order: DESC }){
      group(field: frontmatter___tags){
        tags: fieldValue
      }
    }
  }
`).then( res => {
  
  // tag は必ず、category の上位集合として定義してください.
  res.data.groups.group.forEach(( group_item ) => {
    createPage({
      component: tagsTemplate,
      path: `/tags/${group_item.tags}`,
      context: {
        tags: group_item.tags,
      },
    })
  })
  
  res.data.allPosts.edges.forEach(({ node, previous, next }) => {
    createPage({
      component: blogTemplate,
      path: `/blog${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

})
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ stage, loaders, actions }) => {

  if (stage === 'build-html') {
    actions.setWebpackConfig(
      {
        module: {
          rules: [
            {
              test: /webfontloader/,
              use: loaders.null()
            }
          ]
        }
      }
    );   
  }
  
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    resolve: {
      alias: {
        "@":  path.resolve(__dirname, "src"),
        "@@": path.resolve("./"),
        "@components": path.resolve(__dirname, "src/components"),
        "@layouts":  path.resolve(__dirname, "src/layouts"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@utils":  path.resolve(__dirname, "utils"),
        "@static":  path.resolve(__dirname, "static"),
      }
    },
  });
};