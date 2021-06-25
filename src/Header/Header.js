import './Header.css';
import { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: props.step * 25,
    };
  }

  render() {
    return (
      <ProgressBar now={this.state.now}  label={`${this.state.now}%`} />
    );
  }
}

export default Header;
