// import React, {useState} from "react";
// import Form from 'react-bootstrap/Form';
// import * as AiIcons from 'react-icons/ai';
// import './Searchcom.css'

// function Searchcom(props) {
//   const [searchTerm, setSearchTerm] = useState("");
//   console.log(props)

//   return (
//     <>
//              <Form>
//                <AiIcons.AiOutlineSearch className='IconSearch'/>
//                 <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
//                   setSearchTerm(event.target.value)
//                 }}/>
//                 </Form>
       
//         <div className="searchInput">
//           {
//                 props.titles.filter((val) => {
//                 if(searchTerm == ""){
//                   return val;
//                 }else if(val.toLowerCase().includes(searchTerm.toLowerCase())){
//                   return val;
//                 }
//               })
//               .map((val) => {
//                 return(
//                   <div className="template" key={val.id}>
//                       <h3 className="title">{val}</h3>
//                   </div> 
//                 )
//               })
//           }
//         </div>
      
//     </>
//   )
// }

// export default Searchcom;


import React, { useState } from "react";
import "./Searchcom.css";
// import SearchIcon from "@material-ui/icons/Search";
import * as AiIcons from 'react-icons/ai';
// import * as AiIcons from 'react-icons/ai';

// import CloseIcon from "@material-ui/icons/Close";

function SearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  console.log(props.titles)

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = props.titles.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="seach for element"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiIcons.AiOutlineSearch />
          ) : (
            <AiIcons.AiOutlineCloseCircle id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return (
             
                <p>{value}</p>
            
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;