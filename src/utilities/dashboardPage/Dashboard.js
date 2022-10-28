import React from 'react';
// import sessionInfo from '../modal/DataModel'
// import LeftMenu from '../menu/leftMenu';
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FaList, FaRegHeart } from "react-icons/fa";
import RBMenu from '../../Components/reactBootstrapMenu/RBMenu';
import SelectBasicExample from '../../Components/SelectBasicExample';


class Dashboard extends React.Component {
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
            visitType: ['Select','corporate','Worker Comp','MentalHealth']
        });

    };
    render() {
        return (
            <div>
                   <RBMenu menuHeader="Menu Items" titles={this.state.menuTitles} isSubmenu={this.state.isSubmenus} />
                   <SelectBasicExample  titles={this.state.visitType} />
            </div>
        )
    }
}
export default Dashboard;
