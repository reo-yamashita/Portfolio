import React from "react"
import { Link } from "gatsby"
import { Colors } from "@/utils/colors"

const BlogList_Parts = ({ node }) => {
  return (
    <article className="max-w-lg">
      <div className="flex items-center gap-2 mb-1">
        <p className="text-sm select-none text-blue-400 opacity-80">
          {node.frontmatter.date}
        </p>
        <ul className="space-x-2 flex items-center">
          {node.frontmatter.tags.map((tag) => {
            let colored = Colors(tag)

            return (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>
                  <div
                    className={`rounded-lg select-none leading-tight text-xs text-white px-2 py-1 ${colored.bg} flex justify-center items-center hover:opacity-75 transition-opacity`}
                  >
                    {tag}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Link to={`/blog${node.fields.slug}`}>
        <p className="text-lg sm:text-2xl font-bold tracking-wide mb-3">
          {node.frontmatter.title}
        </p>
      </Link>
      <div>
        <p className="tracking-wide">{node.frontmatter.learning_Point}</p>
      </div>
    </article>
  )
}

export default BlogList_Parts
