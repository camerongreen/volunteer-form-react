import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Choices from '../Choices/Choices';
import Confirm from '../Confirm/Confirm';
import Header from '../Header/Header';
import VolTypes from '../VolTypes/VolTypes';
import './VolsForm.css';

class VolsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      maxSteps: 3,
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
    let buttons = [];
    if (this.state.step !== 1) {
      buttons.push(<button type="button"
                         onClick={() => this.setState({ step: this.state.step - 1 })}>Back</button>);
    }
    if (this.state.step === this.state.maxSteps) {
      buttons.push(<button type="submit" onClick={() => this.showOptions}>Send
        enquiry</button>);
    } else {
      buttons.push(<button type="button"
                         onClick={() => this.setState({ step: this.state.step + 1 })}>Next</button>);
    }
    return (
      <BrowserRouter>
        <div className="VolsForm">
          <Header step={this.state.step} steps={this.state.maxSteps}/>
          <Switch>
            <Route path={['/', '/volunteer-form/1']} exact={true}>
              <VolTypes types={this.state.checkboxes}/>
            </Route>
            <Route path="/volunteer-form/2" exact={true}>
              <Choices types={this.state.checkboxes}/>
            </Route>
            <Route path="/volunteer-form/3" exact={true}>
              <Confirm types={this.state.checkboxes}/>
            </Route>
          </Switch>
          {buttons}
        </div>
      </BrowserRouter>
    );
  }
}

export default VolsForm;
