import { TypeInfoBar } from '@@/allTypes/gatsby-type'
import React from 'react'

const InfoBar: React.FC<TypeInfoBar> = ({title, details}) => {
  return(
  <div className="select-none bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 m-2" role="alert">
    <p className="font-bold">{title}</p>
    <p className="text-sm">{details}</p>
  </div>
  )
}

export default InfoBar