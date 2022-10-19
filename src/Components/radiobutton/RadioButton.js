import React, { useState } from 'react'

function RadioButton() {
   const [show ,setShow] = useState(false)
   const [data ,setData] = useState(false)



  return (
   
        <div>
      <input type='radio' name='new' value='visit' onClick={() => setShow(!show)}/>
      <lable>Create new Visit</lable><br /><br />

      <input type='radio' name='new' value='Request' onClick={() => setData(!show)}/>
      <lable>Create Service Request</lable>
      <h2>hello</h2>
      {show && <div>
        <input type='text' />
        <input type='text' />
    </div>}

    {data && <div>
        <label>Company Search:</label><br></br>
        <input type='text' placeholder='Search Company'/>
    </div>}
 
    </div>
  )
}

export default RadioButton
