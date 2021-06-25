import './Header.css';
import { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.step,
      steps: props.steps,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.step !== this.props.step) {
      this.setState({ step: this.props.step });
    }
  }

  render() {
    return (
      <ProgressBar now={Math.ceil(this.state.step * (100 / this.state.steps))}
                   label={this.state.step + '/' + this.state.steps}/>
    );
  }
}

export default Header;
