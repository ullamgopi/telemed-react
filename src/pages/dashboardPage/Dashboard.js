// import React,{useState} from 'react'
// import SelectBasicExample from '../../Components/Dropdown/SelectBasicExample';
// // import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
// import Form from 'react-bootstrap/Form';
// import './MainBoard.css'


// function MainBoard(props) {
//     const [sidebar, setSidebar] = useState(false);
//     const [subnav, setSubnav] = useState(false);
//     const [radiovalue,setRadiovalue] = useState(false)

//     console.log(props)
  
//     const showSidebar = () => setSidebar(!sidebar);
//     const showSubnav = () => setSubnav(!subnav);




//   return (
//     <div>
//        <div className='total'>

//       <Form>
//        <Form.Check 
//            type="radio"
//            id="custom-switch"
//            label="Create New Visit"
//            onChange={(checked) => setRadiovalue(checked==='visit')} 
//            checked ='visit'
//            />

//           <Form.Check 
//            type="radio"
//            id="custom-switch"
//            label="Create Service Request"
//            onChange={(checked) => setRadiovalue(checked==='service')}
//            checked ='service'
//            />
//         </Form>


//       {radiovalue && <div>
//         <div>
//         <p>Visit Type:</p>
//         <SelectBasicExample items={props}/>
//       </div>


//      <div>
//         <p>Purpose of visit:</p>
//         <SelectBasicExample items={props}/>
//       </div> 
//     </div>}

//     {radiovalue && <div>
   
//     <p>country:</p>
//     <SelectBasicExample items={props}/>

//     </div>}
 
//     </div>
//    </div>
//   )
// }

// export default MainBoard

import React,{useState} from 'react'
import SelectBasicExample from '../../Components/Dropdown/SelectBasicExample';
// import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
import Form from 'react-bootstrap/Form';
import './Dashboard.css'


function Dashboard(props) {
    const [sidebar, setSidebar] = useState(false);
    const [subnav, setSubnav] = useState(false);

    console.log(props)
  
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
        <SelectBasicExample items={props}/>
      </div>


     <div>
        <p>Purpose of visit:</p>
        <SelectBasicExample items={props}/>
      </div> 
    </div>}

    {subnav && <div>
   
    <p>country:</p>
    <SelectBasicExample items={props}/>

    </div>}
 
    </div>
   </div>
  )
}

export default Dashboard

