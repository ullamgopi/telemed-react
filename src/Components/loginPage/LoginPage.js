import React from 'react'
import '../loginPage/LoginPage.css'

function LoginPage() {

    
  return (
      <div className='back-container'>
        <div className='text-container'><h2>Casuceus TeleMed</h2></div>

        <div className='wrapper'>
        <div className='subWrapper'>
              <input type="text"  placeholder="Enter email" className='inputmet'/><br />
              <input type="text" placeholder="Password" className='inputmet'/><br />
        </div><br />

         <button  placeholder="Login" className='submit'>Login in</button>
  </div> 
   </div>

  )
}

export default LoginPage
