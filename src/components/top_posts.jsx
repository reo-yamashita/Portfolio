import React from "react"

const TopPosts = ({ title, color }) => {
  return (
    <div className="select-none top_posts_basis p-3">
      <div
        className={`shadow-md rounded-lg px-8 pt-4 pb-6 ${color.hover_bg}
      transition_ease_in flex justify-center`}
      >
        <p
          className={`select-none block text-2xl tracking-wider font-medium ${color.text}`}
        >
          {title}
        </p>
      </div>
    </div>
  )
}

export default TopPosts
