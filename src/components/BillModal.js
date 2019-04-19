import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import BillTabs from "./BillTabs";
import PropTypes from "prop-types";

class BillModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            className="zigzag"
            toggle={this.toggle}
            close={closeBtn}
          />
          <ModalBody>
            <BillTabs
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
              toggle={this.toggle}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

BillModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default BillModal;
