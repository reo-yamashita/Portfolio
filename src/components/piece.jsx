import React from "react"
import { Link } from "gatsby"
import { Colors } from "@/utils/colors"

const Piece = ({ title, date, tech, link, children }) => {
  return (
    <div className="rounded-lg p-5 shadow-lg opacity-80 hover:opacity-90 transition-opacity">
      <div>
        {link.in ? (
          <Link to={link.to}>
            <p className="text-xl sm:text-2xl font-medium p-1">{title}</p>
          </Link>
        ) : (
          <a href={link.to}>
            <p className="text-xl sm:text-2xl font-medium p-1">{title}</p>
          </a>
        )}
        <div className="text-base text-gray-700 tracking-wide py-3 pl-1">
          <p>{children}</p>
        </div>
      </div>
      <div className="m-1">
        <p className="text-sm text-teal-700 leading-4 tracking-wide my-1">
          created at {date}
        </p>
        <ul className="flex flex-wrap gap-2">
          {tech.length > 0 &&
            tech.map((item) => {
              let colored = Colors(item)
              return (
                <li key={item}>
                  <div
                    className={`rounded-lg select-none px-2 py-1
                  text-xs inline-block ${colored.bg} text-white leading-tight tracking-wide`}
                  >
                    {item}
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Piece
