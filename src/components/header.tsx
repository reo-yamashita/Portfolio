import React  from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => {

return (
<div className="sm:pt-16 pt-10">
  <div className="px-8  sm:max-w-5xl max-w-lg mx-auto">
    <div className="sm:flex">
      <div className="select-none ">
        <Link to="/">
          <h1  className="font-extrabold tracking-wide sm:text-5xl leading-snug hover:text-indigo-800 text-4xl">Welcome to <span className="inline-block">My Portfolio</span></h1>
        </Link>
        <p className="py-1 sm:pl-3">
        なーこぉのポートフォリオです。JavaScriptフレームワークやマーケティングについて学んでいます。
        </p>
      </div>
    </div>
  </div>
</div>
)}

export default Header