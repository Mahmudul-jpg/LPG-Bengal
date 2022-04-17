import React from 'react'
import bg from '../images/bgImage.jpg'
import NavBar from './NavBar'

 function Header() {
  return (
      <div style={{backgroundImage:`url(${bg})`}}>
          <section >
          <NavBar/>
    </section>
    
      </div>
    
  )
}
export default Header