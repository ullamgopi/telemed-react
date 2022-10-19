import React,{useState} from 'react';
// import './App.css';
import SideData from './SideData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { Link } from 'react-router-dom';





const item = [
  {
    title: 'Back',
    path: '/back',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Incomplete Visits',
    path: '/incompletevisits',
    icon: <IoIcons.IoIosPaper />,
    
  },
  {
    title: 'Incomplete Forms',
    path: '/incompleteforms',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: 'State',
          path: '/reports/state',
        //   cName: 'sub-nav'
        },
        {
          title: 'COVID-19',
          path: '/reports/covid-19',
         
        //   cName: 'sub-nav'
        },
        {
          title: 'SWA',
          path: '/reports/swa',
        
        },
        {
            title: 'Fedex',
            path: '/reports/fedex',
           
          },
          {
            title: 'USPS',
            path: '/reports/usps',
            
          },
          {
            title: 'FROI',
            path: '/reports/froi',
            
          },
          {
            title: 'UPS',
            path: '/reports/ups',
       
          }
      ]
  },
  {
    title: 'Completed Visits',
    path: '/completedvisits',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Add Documents',
    path: '/adddocuments',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Future Visits',
    path: '/Future Visits',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Company Protocol',
    path: '/companyprotocol',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Sign Out',
    path: '/signout',
    icon: <IoIcons.IoMdHelpCircle />
  }
];



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
  background: white;
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
  color: 'red',
  listStyle:'none',
  textDecoration: 'none',
  
}
const closeIcon = {
    color: 'red',
    marginleft: '188px',
    position: 'absolute',
    margintop: '-47px',
    fontsize: '34px',
}

function Side() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (

    <IconContext.Provider value={{ color: '#fff' }}>

      <Nav><NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon></Nav>
    

    <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'> */}
            <h2 style={textHead}>Menu Items</h2>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={closeIcon}/>
            {/* </NavIcon> */}
            <div class="sidebar">
               <SideData items={item} />
            </div>
          </SidebarWrap>
        </SidebarNav>

    </IconContext.Provider>
  );
}

export default Side;

