import React,{useState} from 'react'
import './Datepick.css'

function Datepick() {
    const [date,setDate] = useState();

  return (
    <div className='pickerDate'>
      <h1>Selected Date:{date}</h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  )
}

export default Datepick
