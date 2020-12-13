import React from 'react'
import SmHeader from '@components/sm_header'
import Footer from '@/components/footer';

const Layout = ({children, location}) => {

return (
<div className="min-h-screen flex flex-col layout_background-color relative" >
  {location === 'top' 
    ? <div className="h-6 bg-lightblue-700"></div>
    : <SmHeader />
  }
  <main className="flex-1">
    {children} 
  </main>
  <Footer/>
</div>
)
}

export default Layout