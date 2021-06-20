import { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.id,
      label: props.label,
      isChecked: props.isChecked
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event) {
    this.setState({isChecked: event.target.checked});
  }

  render() {
    return (
      <label htmlFor={this.state.id}>
        <input type="checkbox" id={this.state.id}
               onChange={this.handleCheck}
               name={this.state.id} value={this.state.label}
               checked={this.state.isChecked}/>
        {this.state.label}
      </label>
    );
  }
}

export default Checkbox;
