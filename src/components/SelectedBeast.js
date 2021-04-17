import { Modal } from 'react-bootstrap';
import React from 'react';

class SelectedBeast extends React.Component {

  render() {

    return (
      <>

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Dialog>

      </>)
  }
}

export default SelectedBeast;