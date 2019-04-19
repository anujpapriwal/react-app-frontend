import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input } from "reactstrap";

class BillForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit} enctype="multipart/form-data">
        <FormGroup>
          <Input
            type="text"
            name="vname"
            id="vname"
            placeholder="Vendors Name"
            onChange={this.props.handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="category"
            type="select"
            id="category"
            onChange={this.props.handleChange}
            required
          >
            <option>Food</option>
            <option>Clothing</option>
            <option>Electronics</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="wallet"
            id="wallet"
            placeholder="Wallet"
            onChange={this.props.handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="Date:"
            onChange={this.props.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="note"
            id="note"
            placeholder="Add a note."
            onChange={this.props.handleChange}
            required
          />
        </FormGroup>
        <br />{" "}
        <FormGroup>
          <Button
            className="form-buttons"
            outline
            color="danger"
            onClick={this.props.toggle}
          >
            Discard
          </Button>
          <Button className="form-buttons" outline color="success">
            Done
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

BillForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default BillForm;
