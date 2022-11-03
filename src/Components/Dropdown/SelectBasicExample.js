import Form from 'react-bootstrap/Form';
import './SelectBasic.css'

function SelectBasicExample(items) {
  // console.log(data.items)
  console.log(items.items.titles)
  return (
    <Form.Select aria-label="Default select example" >
     {/* {data.items.titles.map((element)=>(
            <option>{element}</option>  
       ))}  */}

       {items.items.titles.map((element)=>(
            <option>{element}</option>  
       ))} 


    
    </Form.Select>
  );
}

export default SelectBasicExample;