import React from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
class Forms extends React.Component {

  render() {
    return (

      <Form>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item eventKey ="1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Form>
    );
  }
}

export default Forms;