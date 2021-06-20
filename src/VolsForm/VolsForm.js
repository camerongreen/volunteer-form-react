import './VolsForm.css';
import { Component } from 'react';
import VolTypes from '../VolTypes/VolTypes';

class VolsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxes: [
        {
          key: 1,
          id: "sanctuary",
          label: "Volunteering at animal sanctuary",
          isChecked: false,
        },
        {
          key: 2,
          id: "research",
          label: "Academic style research and report writing",
          isChecked: false,
        },
        {
          key: 3,
          id: "online",
          label: "Online activism, signing petitions, writing letters etc.",
          isChecked: false,
        },
        {
          key: 4,
          id: "street",
          label: "Talking and interacting with the public",
          isChecked: false,
        },
      ],
    }
  }

  showOptions(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="VolsForm">
        <form>
          <VolTypes types={this.state.checkboxes} />
          <button type="submit" onClick={this.showOptions}>Show me</button>
        </form>
      </div>
    );
  }
}

export default VolsForm;
