import React,{useState} from 'react'
import SelectBasicExample from '../../Components/SelectBasicExample'
// import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
import Form from 'react-bootstrap/Form';
import './MainBoard.css'


function MainBoard() {
    // const [show ,setShow] = useState(false)
    // const [data ,setData] = useState(false)

    const [sidebar, setSidebar] = useState(false);
    const [subnav, setSubnav] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
    const showSubnav = () => setSubnav(!subnav);




  return (
    <div>
       <div className='total'>
      {/* <input type='radio' name='new' value='visit' onClick={showSidebar}/>
      <lable>Create new Visit</lable><br /><br /> */}

      <Form>
       <Form.Check 
           type="radio"
           id="custom-switch"
           label="Create New Visit"
           onClick={showSidebar}
           />

          <Form.Check 
           type="radio"
           id="custom-switch"
           label="Create Service Request"
           onClick={showSubnav}
           />
        </Form>

      {/* <input type='radio' name='new' value='Request' onClick={showSubnav}/>
      <lable>Create Service Request</lable> */}


      {sidebar && <div>
        <div>
        <p>Visit Type:</p>
        <SelectBasicExample />
      </div>


     <div>
        <p>Purpose of visit:</p>
        <SelectBasicExample />
      </div> 
    </div>}

    {subnav && <div>
   
    <p>country:</p>
    <SelectBasicExample />

    </div>}
 
    </div>
   </div>
  )
}

export default MainBoard


