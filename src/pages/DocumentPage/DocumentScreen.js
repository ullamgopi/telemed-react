import React from 'react'
import SearchBar from '../../Components/Search/SearchBar';
import SelectTextFields from '../../Components/Dropdown/SelectTextFields';
import Button from '../../Components/Buttons/Button'
import Form from 'react-bootstrap/Form';
import './DocumentScreen.css'

// import Box from '@mui/material/Box';
// import SelectBasicExample from '../../Components/Dropdown/SelectBasicExample'

// import Button from 'react-bootstrap/Button';




function DocumentScreen(props) {
    console.log(props)

  return (

            <Form className='totalContainer'>
            <div className='headerImg'>
                 <img src={require('../../assets/blueicon.jpg')}  className='headerImage'/> <br></br>
            </div>
                  <div className='headerLabel'>
                  <label className='searchCompany'>Select Company </label> <br></br>
                  </div>
                  {/* <label className='searchCompany'>Company Search</label> <br></br> */}
                  <div className='parentLabel'>
                  <Form.Label htmlFor="inputPassword">Patient Search:</Form.Label><br></br>
                  </div>
                  {/* <Form.Label htmlFor="inputPassword">Patient Search:</Form.Label><br></br> */}
                  <SearchBar placeholder="Search Company"  />  <br />
                  <SelectTextFields  items={props} />  <br />  
                  <Button />
             </Form>

            
 
  )
}

export default DocumentScreen







    
  
    



