import React from 'react'
import './LoginPage.css'
import image from 'D:/Telemed-project/telemed-react/src/assets/TelemedAppIcon.png'
import Topheading from '../../Components/topheading/Topheading'
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';

function LoginPage() {

    
  return (
    <div>
       <Topheading />
      <div className='back-container'></div>
     
        <div className='wrapper'>
           <img src={image}  className='imgsrc'/>
                     <div className='subWrapper'>
              {/* <input type="text"  placeholder="Enter email" className='inputmet'/><br />
              <input type="text" placeholder="Password" className='inputmet'/><br /> */}

      <FormLabel
        controlId="FormInput"
        label="Email address"
        // className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" className='inputmet'/>
      </FormLabel>

      <FormLabel controlId="FormPassword" label="Password">
        <Form.Control type="password" placeholder="Password" className='inputmet'/>
      </FormLabel>
  
        </div><br />

         <button  placeholder="Login" className='submit'>Login   in</button>
  </div> 
   
   </div>

  )
}

export default LoginPage
