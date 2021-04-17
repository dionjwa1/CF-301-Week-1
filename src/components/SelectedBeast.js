import { Modal } from 'react-bootstrap';
import React from 'react';

class SelectedBeast extends React.Component {


  render() {

    return (
      <>

        <Modal show={this.props.showModal} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={this.props.imgUrl} title={this.props.title} alt="Test" ></img>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

      </>)
  }
}

export default SelectedBeast;