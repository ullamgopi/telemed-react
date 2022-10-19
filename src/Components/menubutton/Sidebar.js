import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


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
  background:white;
  width: 250px;
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
  color: 'white',
  textdecoration:'none'
}
// const topHeader = {
//   marginLeft:'800px',
//   marginRight:'200px',
//   marginTop: '50px',
//   position: 'absolute',

// }


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

      <Nav>
          <NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          {/* <Topheading style={topHeader} /> */}
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
            <h2 style={textHead}>Menu Items</h2>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{marginLeft:'60px'}}/>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;


