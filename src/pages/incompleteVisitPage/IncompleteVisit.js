import React from 'react'
import Form from 'react-bootstrap/Form';
import SearchBar from '../../Components/Search/SearchBar'

function IncompleteVisit() {
  return (
    <div>
      <Form>
         <Form.Label htmlFor="inputPassword5">Patient  Search:</Form.Label>
         <SearchBar />
       </Form>
    </div>
  )
}

export default IncompleteVisit


