import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import BillForm from "./BillForm";

class BillTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    var ExpenseBtn, IncomeBtn;
    if (this.state.activeTab === "1") {
      ExpenseBtn = <Button color="primary">Expense</Button>;
      IncomeBtn = (
        <Button outline color="primary">
          Income
        </Button>
      );
    } else {
      ExpenseBtn = (
        <Button outline color="primary">
          Expense
        </Button>
      );
      IncomeBtn = <Button color="primary">Income</Button>;
    }
    return (
      <div>
        <div id="tab-btn">
          <Nav tabs id="bill-tab">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                {ExpenseBtn}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                {IncomeBtn}
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <BillForm
                  handleChange={this.props.handleChange}
                  handleSubmit={this.props.handleSubmit}
                  toggle={this.props.toggle}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Content</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

BillTabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default BillTabs;
