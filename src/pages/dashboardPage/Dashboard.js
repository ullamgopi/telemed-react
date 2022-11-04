import React,{useState} from 'react'
import SelectBasicExample from '../../Components/Dropdown/SelectBasicExample';
// import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
import Form from 'react-bootstrap/Form';
import './Dashboard.css'
import Documentpick from '../../Components/documentPicker/Documentpick';


function Dashboard(props) {
    const [radio,setRadio] = useState('')

    console.log(props)
  
  
  return (
    <div>
       <div className='total'>
      <Form>
       <Form.Check 
           type="radio"
           id="custom-switch"
           name="visit"
           label="Create New Visit"
           onClick={() => setRadio("visit")} 
           checked={radio ==="visit"}
           className="visitName"
           /> 

          <Form.Check 
           type="radio"
           id="custom-switch"
           name="service"
           label="Create Service Request"
           onClick={() => setRadio("service")}
           checked={radio ==="service"}
           className="serviceName"
           />
        </Form>


      {radio === "visit" && <div className='radiobtn1'>
        <div>
        <p>Visit Type:</p>
        <SelectBasicExample items={props}/>
      </div>

     <div>
        <p>Purpose of visit:</p>
        <SelectBasicExample items={props}/>
      </div> 
    </div>}

    {radio === "service" && <div className='radiobtn1'>
   
    <p>country:</p>
    <SelectBasicExample items={props}/>

    </div>}
 
    </div>

      {/* <Documentpick /> */}

   </div>
  )
}

export default Dashboard

