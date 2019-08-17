import React from "react";
import StepLineup from "./StepLineup";
import ExchangeBox from "./ExchangeBox";
import ExchangeBoxFooter from "./ExchangeBoxFooter";

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="box-container">
          <StepLineup />
          <ExchangeBox />
          <ExchangeBoxFooter />
        </div>
      </div>
    );
  }
}
