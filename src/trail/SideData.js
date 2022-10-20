// import React from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import './SideData.css'


// function SideData({ items }) {
//   return (
//     <div className="sideDtSideData">
//       <List disablePadding dense>
//         {items.map(({title , icon, ...rest }) => (
//           <ListItem key={title} button {...rest}>
//             <ListItemText>{icon}</ListItemText>
//             <ListItemText className='text-title'>{title}</ListItemText>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   )
// }

// export default SideData;



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



