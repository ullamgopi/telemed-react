import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title:'Back',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Incomplete Visit',
        path: '/incompletevisit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'Incomplete Forms',
        path: '/incompleteforms',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title:'Completed Visits',
        path: '/completedvisits',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title:'Add Documents',
        path: '/adddocuments',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title:'Future Visit',
        path: '/futurevisit',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title:'Company Protocol',
        path: '/companyprotocol',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title:'Sign Out',
        path: '/signout',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]
