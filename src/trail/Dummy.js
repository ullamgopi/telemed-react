import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//  import { SidebarData } from './SidebarData.js';


//package for list
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './SideData.css'
import { SidebarData } from './SidebarData';



const Nav = styled.div`
  background-color: red;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  color:white;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const textHead = {
  fontSize : '20px',
  color: 'red',
  listStyle:'none',
  textDecoration: 'none',
  
}


 export function Side() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

const dataCamp = SidebarData
console.log(dataCamp)
  

  return (

    <IconContext.Provider value={{ color: '#fff' }}>

      <Nav><NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon></Nav>

    <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <h2 style={textHead}>Menu Items</h2>
              <AiIcons.AiOutlineClose onClick={showSidebar}  style={{marginLeft:'200px',marginTop:'-40px',position:'absolute'}}/>
            {/* <div className="sidebar">
               <SideData items={SidebarData} />  // sending has prop
            </div> */}

            {dataCamp.map(({icon,title})=>(<ListItem>
            <ListItemText>{icon}</ListItemText>
            <ListItemText className='text-title'>{title}</ListItemText> 
        </ListItem>))}
    
          </SidebarWrap>
        </SidebarNav>

    </IconContext.Provider>
  );
}


export function SideData(props) {
    console.log(props)
  return (
    <div className="sideDtSideData">
      <List disablePadding dense>
        {props.items.map(({icon,title})=>(<ListItem>
            <ListItemText>{icon}</ListItemText>
            <ListItemText className='text-title'>{title}</ListItemText>
        </ListItem>))}

      </List>
    </div>
  )
}









