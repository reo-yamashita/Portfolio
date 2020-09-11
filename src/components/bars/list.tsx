import { TypeList } from '@@/allTypes/gatsby-type'
import React from 'react'

const List:React.FC<TypeList> = ({list_item}) => {
  return(
    <ul className="inline-block rounded-lg list-inside border border-blue-300 px-4 py-3 mx-5 mb-4 space-y-2">
      {list_item.map( item => {
        return (
          <li key={item}>{item}</li>
        )
      })}
    </ul>
  )
}

export default List