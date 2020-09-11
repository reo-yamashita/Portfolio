import { TypeTitle } from '@@/allTypes/gatsby-type'
import React from 'react'

const Title: React.FC<TypeTitle> = ({ children }) => {
  return(
    <div className="select-none my-8 border-l-4 border-indigo-800">
      <p className="text-2xl text-blue-900 tracking-wide pl-3">{children}</p>
    </div>
  )
}

export default Title