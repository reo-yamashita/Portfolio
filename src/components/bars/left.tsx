import { TypeLeftBar } from '@@/allTypes/gatsby-type'
import React from 'react'

const LeftBar: React.FC<TypeLeftBar> = ({title, details}) => {
  return(
  <div className="select-none bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 m-2" role="alert">
    <p className="font-bold">{title}</p>
    <p>{details}</p>
  </div>
  )
}

export default LeftBar