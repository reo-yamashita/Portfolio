import { TypeCaution } from '@@/allTypes/gatsby-type'
import React  from 'react'

const Caution: React.FC<TypeCaution> = ({conclution, children}) => {
  return(
    <div role="alert" className="inline-block">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-1">
      Attention !!
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700 
      　　text-sm sm:text-base">
        <p className="px-1 pb-3 pt-2 text-base tracking-wide">{conclution}</p>
        <p className="px-4 text-sm text-orange-800 tracking-wider">{children}</p>
      </div>
    </div>
  )
}

export default Caution