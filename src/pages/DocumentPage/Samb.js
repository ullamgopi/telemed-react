// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { Form } from 'react-router-dom';
import SearchBar from '../../Components/Search/SearchBar';
import SelectTextFields from '../../Components/Dropdown/SelectTextFields';



// export default function Samb(props) {
//     // console.log(props.items.titles)
//   const [currency, setCurrency] = React.useState('Select');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//    <div>
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 0, width: '100%',height:'100%',marginTop:'' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//        <TextField style={{marginTop:'10px'}}
//       >
//        <SearchBar />
//         <SelectTextFields   items={props}/>
//        </TextField>
       
//     </Box>
//     </div>
//   );
// }

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
  const [age, setAge] = React.useState('age');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          
        </Select>
        <SelectTextFields items={props}/>
      
      </FormControl><br></br>
      
    </div>
  );
}