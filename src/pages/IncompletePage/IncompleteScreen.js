import React from 'react'
import Form from 'react-bootstrap/Form';
import SearchBar from '../../Components/Search/SearchBar'

function IncompleteScreen() {
  return (
    <div>
      <Form>
         <Form.Label htmlFor="inputPassword5">Patient  Search:</Form.Label>
         <SearchBar />
       </Form>
    </div>
  )
}

export default IncompleteScreen


