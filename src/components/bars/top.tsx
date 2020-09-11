import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { TypeTopBar } from '@@/allTypes/gatsby-type'

const TopBar: React.FC<TypeTopBar> = ({title, details}) => { 

  return(
  <div className="select-none bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-2" role="alert">
    <div className="flex">
      <div  className="py-1"> 
        <FontAwesomeIcon icon={faInfoCircle} className="h-8 text-teal-500 mr-4 text-xl"/>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  </div>
  )
}

export default TopBar