import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Form } from 'react-router-dom';



export default function SelectTextFields(props) {
    console.log(props.items.titles)
  const [currency, setCurrency] = React.useState('Select');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
   <div className='formTotal'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
         
        >
          {props.items.titles.map((element) => (
            <MenuItem key={element} value={element}>
              {element}
            </MenuItem>
          ))}
        </TextField>
       
      </div>
   
       
      
     
    </Box>
    </div>
  );
}

    
  
    


