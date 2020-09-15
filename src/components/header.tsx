import React  from 'react'
import { Link } from 'gatsby'
import Update from '@components/update'

const Header: React.FC = () => {

return (
<div className="pt-16">
  <div className="px-8 mx-auto max-w-xl sm:max-w-6xl ">
    <div className="sm:flex">
      <div className="select-none basis flex-grow">
        <Link to="/">
          <h1  className="font-extrabold mb-3 tracking-wide text-4xl leading-snug hover:text-indigo-800">Welcome to <span className="inline-block">My Blog</span></h1>
        </Link>
        <p className="py-3 pr-3">
          This is Gatsby-based blog about programming. <br/>
          I write this blog to output my experience and knowledge about mainly frontend.
        </p>
      </div>
      <div  className="basis  flex-grow sm:pl-4 sm:pt-3">
        <Update />
      </div>
    </div>
  </div>
</div>
)}

export default Header