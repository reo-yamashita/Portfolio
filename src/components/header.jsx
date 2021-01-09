import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="sm:pt-14 pt-10">
      <div className="px-8  sm:max-w-5xl max-w-lg mx-auto">
        <div className="flex justify-center">
          <Link to="/">
            <h1 className="font-extrabold tracking-wide sm:text-5xl text-4xl font-mono">
              <span className="inline-block text-red-300">Welcome</span>{" "}
              <span className="inline-block text-rose-200">to</span>{" "}
              <span className="inline-block text-blue-300">My</span>{" "}
              <span className="inline-block text-orange-300  leading-relaxed">
                Portfolio
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
