import Form from 'react-bootstrap/Form';

function SelectBasicExample(props) {
  console.log(props.titles)
  return (
    <Form.Select aria-label="Default select example">
     {props.titles.map((element)=>(
            <option>{element}</option>  
       ))} 
    </Form.Select>
  );
}

export default SelectBasicExample;