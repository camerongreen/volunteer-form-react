import { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step,
      maxSteps: props.steps
    }
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
    return buttons;
  }
}

export default Buttons;
