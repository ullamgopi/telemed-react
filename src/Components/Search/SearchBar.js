import React from 'react'
import Form from 'react-bootstrap/Form';
import * as AiIcons from 'react-icons/ai';
import './Search.css'



function SearchBar() {

  return (

          <div className='fieldcontainer'>
            <Form>
               <AiIcons.AiOutlineSearch className='IconSearch'/>
               <Form.Control type="email" placeholder="Enter email" />
            </Form>
              
          </div>
           
  )
}

export default SearchBar



