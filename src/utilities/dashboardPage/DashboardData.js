import React from 'react';
// import sessionInfo from '../modal/DataModel'
// import LeftMenu from '../menu/leftMenu';
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FaList, FaRegHeart } from "react-icons/fa";
import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
// import SelectBasicExample from '../../Components/SelectBasicExample';
import Dashboard from '../../pages/dashboardPage/Dashboard';
import DocumentScreen from '../../pages/documentPage/DocumentScreen';
import Protocol from '../../Components/CompanyProtocol/Protocol';
// import { Router,Route } from 'react-router-dom';
import CompleteVisit from '../../pages/completeVisitPages/CompleteVisit';
import IncompleteScreen from '../../pages/incompleteVisitPage/IncompleteVisit';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class DashboardData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTitles: [],
            isActiveItems: [],
            isSubmenus: [],
            subMenuTitles: [],
            leftMenuIcons: [],
            subMenuNames: [],
            visitType: [],
            uploadType: [],
        };
    }
    componentDidMount() {
        this.setState({
            menuTitles: [{
                'title': 'Dashboard', 'submenu': [{}], 'url': "/VisitPage"
            }, { 'title': 'Completed Visits', 'submenu': [{}], 'url': "/VisitPage" }, { 'title': 'Incomplete Visits', 'submenu': [], 'url': "/VisitPage" }, { 'title': "Incomplete Forms", 'submenu': [{ 'title': 'State', 'url': "/VisitPage" }, { 'title': 'FROI', 'url': "/VisitPage" }, { 'title': 'FEDEX', 'url': "/VisitPage" }, { 'title': 'UPS', 'url': "/VisitPage" }, { 'title': 'USPS', 'url': "/Login" }, { 'title': 'SWA', 'url': "/Login" }], 'url': " /Login" }, { 'title': "Completed Forms", 'submenu': [{ 'title': 'State', 'url': "Login" }, { 'title': 'FROI', 'url': "/Login" }, { 'title': 'FEDEX', 'url': "/Login" }, { 'title': 'UPS', 'url': "/Login" }, { 'title': 'USPS', 'url': "/Login" }, { 'title': 'SWA', 'url': "Login" }], 'url': "/VisitPage" }],
            isActiveItems: [true, false, false, false],
            isSubmenus: [false, false, false, true, true],
            subMenuTitles: ["/VisitPage", "/VisitPage", "/VisitPage", "/VisitPage", "/VisitPage"],
            leftMenuIcons: [<FaList />, <FaRegHeart />, <RiPencilLine />, <BiCog />],
            visitType: ['Select','corporate','Worker Comp','MentalHealth'],
            uploadType: ['Select','pdf','ppt','doc'],
            purposeType: ['Injury-Office Visit','Injury-First Aid','Injury-MD Triage','Drug/Alcohol test','Physical Therapy','COVID_19 Screening'],
        });

    };
    render() {
        return (
            <div>
                     {/* <DocumentScreen titles={this.state.DocumentType}/> */}
                   <RBMenu menuHeader="Menu Items" titles={this.state.menuTitles} isSubmenu={this.state.isSubmenus} />
                   {/* <Dashboard  titles={this.state.visitType}  subValues={this.state.purposeType} /> */}
                   {/* <DocumentScreen  titles={this.state.uploadType} /> */}


                   <Router>
      <DashboardData />
      <Routes>
        <Route path="/" component={Dashboard} />
        <Route path='/DocumentScreen'  component={DocumentScreen}/>
        <Route path='/CompleteVisit'  component={CompleteVisit}/>
        <Route path='/IncompleteScreen'  component={IncompleteScreen}/>
        <Route path='/Protocol'  component={Protocol}/>
        {/* <Route path='/DocumentScreen'  component={<DocumentScreen />}/>
        <Route path='/DocumentScreen'  component={<DocumentScreen />}/> */}
        </Routes>
      </Router>
            
            </div>
        )
    }
}
export default DashboardData;
