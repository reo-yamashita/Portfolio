import React from 'react'

const TopPosts = ({title, color, children}) => {

  return(
    <div className="select-none top_posts_basis p-3">
      <div className={`border-blue-900 border rounded-lg px-8 pt-4 pb-6 hover:bg-${color}
      hover:shadow-md border-opacity-25 hover:border-opacity-0 transition_ease_in`}>
        <h2 className="text-2xl tracking-wider font-medium text-lightblue-700">{title}</h2>
        <p className="text-base leading-none tracking-wide mt-3 text-gray-900">{children}</p>
      </div>
    </div>
  )
}

export default TopPosts