import "../../../../scss/utils/_all.scss";
import "../../../../scss/app/_controlPanel.scss";
import { NavLink as Link } from "react-router-dom";
import Form from "../Pulpit/Form";

import React, { Component } from "react";

export default class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanelWrap col-lg-12">
        <div className="sidePanelWrap col-lg-2">
          <ul>
            <li className="sidePanelElement" activeClassName="active">
              <Link exact to="/mainApp/mainPanel">
                <div className="optionWrap">
                  <span className="option">Pulpit </span>
                </div>
                <div className="arrowWrap">
                  <span className="arrow">&#62;</span>
                </div>
              </Link>
            </li>
            <li className="sidePanelElement" activeClassName="active">
              <Link exact to="/mainApp/recipes">
                <div className="optionWrap">
                  <span className="option">Przepisy </span>
                </div>
                <div className="arrowWrap">
                  <span className="arrow">&#62;</span>
                </div>
              </Link>
            </li>
            <li className="sidePanelElement" activeClassName="active">
              <Link exact to="/mainApp/plans">
                <div className="optionWrap">
                  <span className="option">Plany </span>
                </div>
                <div className="arrowWrap">
                  <span className="arrow">&#62;</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="componentPanel col-lg-10">
          <Form />
        </div>
      </div>
    );
  }
}
