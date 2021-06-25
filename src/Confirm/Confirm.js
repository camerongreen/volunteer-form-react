import { Component } from 'react';
import Checkbox from './../Checkbox/Checkbox';

class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: props.types
    };
  }

  render() {
    return (
      <ul id="volunteering-type">
        {
          this.state.types.map((el, i) => <li key={el.id.toString()}><Checkbox
            id={el.id}
            label={el.label}
            isChecked={el.isChecked}
          /></li>)
        }
      </ul>
    );
  }
}

export default Confirm;
