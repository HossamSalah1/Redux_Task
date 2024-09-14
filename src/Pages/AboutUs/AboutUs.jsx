import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AboutUs() {
  return (
    <>
    <div>
<Link to='/about'> values</Link>
<Link to='/about/vision'> vision</Link>
    </div>
    
 
     <Outlet/>
    </>

  )
}
