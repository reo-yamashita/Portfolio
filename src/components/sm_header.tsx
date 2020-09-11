import React, { useState } from 'react';
import { Link } from 'gatsby';

export const index = [
  {to: '/',title: 'Home'},
  {to: '/bloglist', title: 'Blog'},
  {to: '/works', title: 'Works'},
  {to: '/myself', title: 'Myself'}
]

const SmHeader = () => {
const [state, toggle] = useState(false)

const indexItem = state ? 'block' : 'hidden'
const open = state ? 'open': null

return (
<div className="pt-2 px-8 bg-indigo-800">
  <div className="max-w-3xl mx-auto ">
    <div className="relative">
      <div className="flex justify-end p-1 sm:hidden transition duration-500"> 
         <div onClick={() => toggle(!state)} className={`burger burger-squeeze ${open}`}>
           <div className="burger-lines" />
         </div>
      </div> 
      <div className={`sm:space-x-6 sm:flex mb-1 ${indexItem} transition duration-500 text-center space-y-8 sm:space-y-0`}>
        { index.map( (item) => {
          return(
            <div key={`${item.title}`}>  
              <Link to={`${item.to}`}>
                <p className="text-white font-normal hover:text-gray-400">
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

