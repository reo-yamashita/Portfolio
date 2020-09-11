import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { TypeSolidBar } from '@@/allTypes/gatsby-type'

const SolidBar: React.FC<TypeSolidBar> = ({children}) => {
  return(
<div className="select-none flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 m-2" role="alert">
  <div  className="py-1"> 
    <FontAwesomeIcon icon={faInfoCircle} className="h-8 text-white mr-4 text-lg"/>
  </div>
  <p>
    {children}
  </p>
</div>
  )
}

export default SolidBar