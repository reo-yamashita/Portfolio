import { TypeTopPosts } from "@@/allTypes/gatsby-type"
import React from "react"

const Recently: React.FC<TypeTopPosts> = ({children}) => {
  return (
    <div className="select-none top_posts_basis p-3 relative pin_tags">
      <div className="px-8 pt-4 pb-6">
        <p className="mt-4">{children}</p>
      </div>
    </div>
  )
}

export default Recently