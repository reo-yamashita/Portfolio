import React from 'react'
import { Link } from 'gatsby'
import { Colors }  from '@@/utils/colors'

const Piece = ({title, date, tech, link, children}) => {
  return(
    <div className="rounded-lg p-5 border border-blue-700">
      <div>
        <Link to={link}>
          <p className="text-xl sm:text-2xl font-medium p-1">{title}</p>
        </Link>
        <div  className="text-base text-gray-700 tracking-wide py-3 pl-1">
          <p>{children}</p>
        </div>
      </div>
      <div className="m-1">
        <p className="text-sm text-teal-700 leading-4 tracking-wide my-1">created at {date}</p>
        <ul className="flex flex-wrap">
          {tech.length > 0 && tech.map( item => {
            let colored = Colors(item)
            return(
              <li key={item}>
                <div className={`rounded-lg px-2 py-1 mr-2 select-none border border-${colored} 
                  text-xs inline-block bg-${colored} text-gray-50 leading-tight tracking-wide`}
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