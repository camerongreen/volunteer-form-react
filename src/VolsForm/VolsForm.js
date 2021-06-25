import './VolsForm.css';
import { Component } from 'react';
import Header from '../Header/Header';
import VolTypes from '../VolTypes/VolTypes';

class VolsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      checkboxes: [
        {
          id: "sanctuary",
          label: "Volunteering at animal sanctuary",
          isChecked: false,
        },
        {
          id: "research",
          label: "Academic style research and report writing",
          isChecked: false,
        },
        {
          id: "online",
          label: "Online activism, signing petitions, writing letters etc.",
          isChecked: false,
        },
        {
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
        <Header step={this.state.step} />
        <form>
          <VolTypes types={this.state.checkboxes} />
          <button type="submit" onClick={this.showOptions}>Show me</button>
        </form>
      </div>
    );
  }
}

export default VolsForm;
