// import * as React from "react";
// import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";



import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

export default function Menu(props) {

  const [menuOpen, setMenuOpen] = React.useState("");
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

 console.log(props.menuItems.type)
  return (
<IconContext.Provider value={{ color: '#fff' }}>

<Nav><NavIcon>
      <FaIcons.FaBars onClick={showSidebar} />
    </NavIcon></Nav>

<SidebarNav sidebar={sidebar}>
    <SidebarWrap>
      <h2 style={textHead}>Menu Items</h2>
        <AiIcons.AiOutlineClose onClick={showSidebar}  style={{marginLeft:'200px',marginTop:'-40px',position:'absolute'}}/>
    <List
      sx={{ width: "100%", maxWidth: 300, bgcolor: "black" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Menu Title
    //     </ListSubheader>
    //   }
    >
      {props.menuItems.type.map((item) => (
        <>
          <ListItemButton onClick={() => setMenuOpen(item.title === menuOpen ?  '' : item.title)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
            {item.subNav ? (
              menuOpen === item.title ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>
          <Collapse in={menuOpen === item.title} timeout="auto" >
            <List component="div" disablePadding>
              {item?.subNav?.map((child) => (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={child.title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
    </SidebarWrap>
        </SidebarNav>

    </IconContext.Provider>
  );
}