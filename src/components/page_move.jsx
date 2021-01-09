import React from "react"
import { Link } from "gatsby"

const PageMove = ({ arrow }) => {
  const { previous, next } = arrow

  return (
    <div className="text-sm sm:text-base">
      <ul className="flex justify-around ">
        {previous && (
          <li className="border-opacity-75 border border-gray-400  px-5 py-3 rounded-md mr-1 hover:text-blue-900 hover:bg-indigo-100 hover:border-opacity-0 hover:shadow-md">
            <Link to={`/blog${previous.fields.slug}`}>
              <p className="text-gray-700">Previous</p>
              <div className="ml-1">
                <p className="text-blue-800 inline-block sm:block">
                  {" "}
                  « {previous.frontmatter.title}
                </p>
              </div>
            </Link>
          </li>
        )}
        {next && (
          <li className="border-opacity-75 border border-gray-400 px-5 py-3  rounded-md ml-1 hover:text-blue-900 hover:bg-blue-100 hover:border-opacity-0  hover:shadow-md">
            <Link to={`/blog${next.fields.slug}`}>
              <p className="text-gray-700">Next</p>
              <div className="ml-1">
                <p className="text-blue-800 inline-block sm:block">
                  {next.frontmatter.title} »　
                </p>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PageMove
