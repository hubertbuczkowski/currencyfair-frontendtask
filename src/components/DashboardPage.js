import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-container">
        <MainContent />
        <Sidebar />
      </div>
    );
  }
}
