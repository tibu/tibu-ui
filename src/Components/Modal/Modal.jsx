import React from "react";
import "./Modal.scss";

import { Modal, Button } from "antd";

class TbModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const {
      children,
      buttonContent = "Open modal",
      modalTitle = "Basic Modal"
    } = this.props;
    return (
      <span>
        <a onClick={this.showModal}>{buttonContent}</a>
        <div>
          <Modal
            title={modalTitle}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          >
            {children}
          </Modal>
        </div>
      </span>
    );
  }
}
export default TbModal;
