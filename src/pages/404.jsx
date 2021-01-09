import React from "react"
import { Link } from "gatsby"
import Layout from "@layouts/main-layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center pt-10 flex-col ">
        <p className="text-6xl tracking-wide mb-4">
          <span className="text-red-100">4</span>
          {` `}
          <span className="text-red-200">0</span>
          {` `}
          <span className="text-rose-300">4</span>
        </p>
        <p>
          <Link to="/" className="text-blue-200 tracking-wider">
            Back to the HOME
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
