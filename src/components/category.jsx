import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Colors } from "@/utils/colors"

const Category = () => {
  const data = useStaticQuery(graphql`
    query CategorizedPosts {
      categorized: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___category) {
          category: fieldValue
        }
      }
    }
  `)

  return (
    <div className="p-2 flex justify-center">
      <div>
        <ul className="flex space-x-3">
          {data.categorized.group.map(({ category }) => {
            let colored = Colors(category)
            return (
              <li key={category}>
                <Link to={`/tags/${category}`}>
                  <div
                    className={`rounded-lg select-none leading-tight text-xs text-white px-2 py-1 ${colored.bg} flex justify-center items-center hover:opacity-75 transition-opacity`}
                  >
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
