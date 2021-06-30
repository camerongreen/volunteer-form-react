import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
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
    return (
      <BrowserRouter>
        <div className="VolsForm">
          <Header step={this.state.step} steps={this.state.maxSteps}/>
          <Switch>
            <Route path={['/volunteer-form/1']} exact={true}>
              <h2>Types of volunteering you're interested in</h2>
              <VolTypes types={this.state.checkboxes}/>
            </Route>
            <Route path="/volunteer-form/2" exact={true}>
              <h2>Volunteering opportunities</h2>
              <Choices types={this.state.checkboxes}/>
            </Route>
            <Route path="/volunteer-form/3" exact={true}>
              <h2>Enquire about volunteering with us</h2>
              <Confirm types={this.state.checkboxes}/>
            </Route>
          </Switch>
          <Buttons step={this.state.step} steps={this.state.maxSteps}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default VolsForm;
