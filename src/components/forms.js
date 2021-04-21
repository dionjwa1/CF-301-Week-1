import React from 'react';
import { Dropdown,Form } from 'react-bootstrap';
class Forms extends React.Component {



  hornSelect = (e) => {
    let horns = parseInt(e.target.value)
    let filter = this.props.array.filter(pics => pics.horns === horns)
    this.props.getFilter(filter)
  }

  render() {
    return (

      <Form>
        <Dropdown>
          <Form.Group>
            <Form.Control as="select" onChange={this.hornSelect}>
              <option value="">Make Your Selection</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horn</option>
              <option value="3">3 Horn</option>
            </Form.Control>
          </Form.Group>
        </Dropdown>
      </Form>
    );
  }
}

export default Forms;