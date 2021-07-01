import { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step,
      maxSteps: props.steps,
      handler: props.handler,
    }
  }

  render() {
    let buttons = [];
    if (this.state.step !== 1) {
      buttons.push(<button key={this.state.step - 1} type="button"
                           onClick={(event) => {
                             this.setState({ step: this.state.step - 1 });
                             this.state.handler(event, this.state.step - 1)
                           }}>Back</button>);
    }
    if (this.state.step === this.state.maxSteps) {
      buttons.push(<button type="submit" key={this.state.maxSteps}
                           onClick={(event) => {
                             this.state.handler(event, this.state.step + 1)
                           }}>Send
        enquiry</button>);
    } else {
      buttons.push(<button key={this.state.step + 1} type="button"
                           onClick={(event) => {
                             this.setState({ step: this.state.step + 1 });
                             this.state.handler(event, this.state.step + 1)
                           }}>Next</button>);
    }
    return buttons;
  }
}

export default Buttons;
