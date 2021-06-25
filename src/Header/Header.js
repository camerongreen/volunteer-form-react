import './Header.css';
import { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.step,
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.step !== this.props.step) {
      this.setState({ step: this.props.step });
    }
  }

  render() {
    return (
      <ProgressBar now={this.state.step * 25}  label={`${this.state.step * 25}%`} />
    );
  }
}

export default Header;
