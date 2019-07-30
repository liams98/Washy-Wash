import React from "react";
import "./Cms.scss";

import SideNav from "../../components/SideNav/SideNav.js";
import CreateMainOrder from "../../components/CreateMainOrder.js/CreateMainOrder.js"
import Cloth from "../../components/ClothTypeMain/ClothTypeMain.js"
import Customer from "../../components/CustomerMain/CustomerMain.js";
import Employees from "../../components/EmployeesMain/EmployeesMain.js"

class Cms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="CMS-Container">
        <div className="SideNav">
         
          <SideNav />
        </div >
        {/* HERE IS THE MAIN PAGE FOR CMS */}
        <div className="MainPage">
          <div className ="MainPage-container">
            <div className="box"> <br></br> <CreateMainOrder /></div>
            <div className="box"><Customer/></div>
            <div className="box"><Employees/></div>
            <div className="box"><Cloth/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cms;
