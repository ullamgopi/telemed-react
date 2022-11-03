import React from 'react'
import Form from 'react-bootstrap/Form';
import SearchBar from '../../Components/Search/SearchBar'

function CompleteVisit() {
  return (
    <div>
       <Form>
         <Form.Label htmlFor="inputPassword5">Company  Search:</Form.Label>
         <SearchBar />
       </Form>
      
    </div>
  )
}

export default CompleteVisit
