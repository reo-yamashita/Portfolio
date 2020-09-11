import React from "react"
import { Link } from 'gatsby'
import { Colors } from '@@/utils/colors'
import { Mdx, MdxFrontmatter, MdxFields } from "@@/gatsby-graphql"

type Node = {
 node: Pick<Mdx, "excerpt"> & {
    frontmatter?: Pick<MdxFrontmatter, "title" | "date" | "learning_Point" | "tags">;
    fields?: Pick<MdxFields, "slug">;
};
}

const BlogList_Parts = ({node}: Node ) => {

  return (
    <article>
      <Link to={`/blog${node.fields.slug}`}>
        <h2 className="text-lg sm:text-2xl font-bold tracking-wide max-w-2xl mb-3">
          {node.frontmatter.title} 
        </h2> 
      </Link>
        <div className="pt-0 max-w-2xl">
          <div className="flex items-center leading-none">
            <p className="text-sm select-none text-teal-600 pr-3">
              {node.frontmatter.date}
            </p>
            <ul className="space-x-2 flex items-center">
            {node.frontmatter.tags.map( (tag) => {
              let colored =  Colors(tag)

              return(
                <li key={tag}>
                  <Link to={`/tags/${tag}`}>
                    <div className={`inline-block rounded-lg select-none leading-tight px-2 py-1 border border-${colored} text-xs  text-${colored} hover:bg-${colored} hover:text-white`}
                    >
                      {tag}
                    </div>
                  </Link>
                </li>
              )
            })}
            </ul>
          </div>
          <p className="mt-2 tracking-wide">
            {node.frontmatter.learning_Point}
          </p>
        </div>
    </article>
  )
}

export default BlogList_Parts