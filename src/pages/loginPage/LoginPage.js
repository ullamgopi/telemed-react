import React from 'react'
import './LoginPage.css'
import image from 'D:/Telemed-project/telemed-react/src/assets/TelemedAppIcon.png'
import Topheading from '../../Components/topheading/Topheading'

function LoginPage() {

    
  return (
    <div>
         <Topheading />
      <div className='back-container'></div>
     
        <div className='wrapper'>
        <img src={image}  className='imgsrc'/>
        <div className='subWrapper'>
              <input type="text"  placeholder="Enter email" className='inputmet'/><br />
              <input type="text" placeholder="Password" className='inputmet'/><br />
        </div><br />

         <button  placeholder="Login" className='submit'>Login   in</button>
  </div> 
   
   </div>

  )
}

export default LoginPage
