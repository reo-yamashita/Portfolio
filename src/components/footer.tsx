import React from "react"
import Social from '@components/Social'

const Footer: React.FC = () => { 
  return (
    <footer className="mt-6 mb-4">
      <div className="mx-auto">  
        <Social />
      </div>
    </footer>
  )
}

export default Footer