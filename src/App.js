import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container, Row } from "reactstrap";

import BillModal from "./components/BillModal";
import AddedBills from "./components/AddedBills";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      bill: {
        vname: "",
        category: "",
        wallet: "",
        date: "",
        note: "",
        img: "",
      },
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/bills")
      .then(res => {
        this.setState({
          bills: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      bill: {
        ...this.state.bill,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      bills: [...this.state.bills, this.state.bill],
    });
    Axios.post("http://localhost:5000/api/bills", {
      vname: this.state.bill.vname,
      category: this.state.bill.category,
      wallet: this.state.bill.wallet,
      date: this.state.bill.date,
      note: this.state.bill.note,
      img: this.state.bill.img,
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="img-wrapper">
          <Container>
            <Row>
              <img
                className="bg-img"
                src={require("./background.svg")}
                alt="Money being transferred."
              />
            </Row>
          </Container>
        </div>
        <div id="main-wrapper">
          <Container>
            <Row>
              <BillModal
                buttonLabel="Add bill"
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Row>
            <br />{" "}
            <Row>
              <AddedBills
                buttonLabel="Check added bills"
                bills={this.state.bills}
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
