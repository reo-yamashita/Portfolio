import React, { useState } from "react"
import { Link } from "gatsby"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"

export const index = [
  { to: "/", title: "Home" },
  { to: "/bloglist", title: "Blog" },
  { to: "/works", title: "Works" },
  { to: "/myself", title: "Myself" },
]

const SmHeader = () => {
  const [state, toggle] = useState(false)

  const indexItem = state ? "block" : "hidden"

  return (
    <div className="py-1 px-8 shadow-md bg-gradient-to-r from-blue-300 via-blue-300">
      <div className="max-w-3xl mx-auto ">
        <div className="relative">
          <div className="flex justify-end p-1 sm:hidden transition duration-500">
            <div
              aria-hidden="true"
              onClick={() => toggle(!state)}
              className={`cursor-pointer transform ${
                state ? "rotate-180" : "rotate-0"
              } transition-transform`}
            >
              <DonutLargeIcon className="text-blue-200" fontSize="large" />
            </div>
          </div>
          <div
            className={`space-y-4 sm:space-y-0 sm:space-x-8 sm:flex ${indexItem} text-center transition`}
          >
            {index.map((item) => {
              return (
                <div key={`${item.title}`}>
                  <Link to={`${item.to}`} onClick={() => toggle(false)}>
                    <p className="text-white hover:text-gray-100">
                      {item.title}
                    </p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmHeader
