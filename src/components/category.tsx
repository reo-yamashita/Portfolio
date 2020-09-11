import React from 'react'
import { Link, graphql ,useStaticQuery } from 'gatsby'
import { Colors } from '@@/utils/colors'
import { CategorizedPostsQuery } from "@@/gatsby-graphql"

const Category: React.FC = () => {

const data = useStaticQuery<CategorizedPostsQuery>(graphql`
  query CategorizedPosts {
    categorized: allMdx (
    sort : {fields : frontmatter___date, order: DESC }){
      group(field: frontmatter___category){
        category: fieldValue
      }
    }
  }
`)

return(
  <div className="p-2 flex justify-center">
    <div>
      <ul className="flex space-x-3">
        {data.categorized.group.map( ({ category })=> { 
          let colored = Colors(category)
          return (
            <li key={category}>
              <Link to={`/tags/${category}`} >
                <div className={`text-${colored} rounded-lg px-2 py-1 select-none border border-${colored} leading-none text-sm inline-block hover:bg-${colored}  hover:text-white hover:border-opacity-0 leading-tight`}>  
                  {category}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default Category