import React, { Component } from "react";

export class EditRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEditValue: props.name,
      countryEditValue: props.country
    };
  }
  onChangeValue = e => {
    this.setState({
      [`${e.target.name}EditValue`]: e.target.value
    });
  };

  onSave = () => {
    this.props.saveRow(
      this.props.id,
      this.state.nameEditValue,
      this.state.countryEditValue
    );
  };
  render() {
    return (
      <div>
        <tr>
          <td scope="row">{this.props.id}</td>
          <td>
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.nameEditValue}
              onChange={this.onChangeValue}
            />
          </td>
          <td scope="row">
            <label for="country">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              value={this.state.countryEditValue}
              onChange={this.onChangeValue}
            />
          </td>
          <td scope="row">
            <button onClick={this.onSave}>Save</button>
          </td>
        </tr>
      </div>
    );
  }
}

export default EditRow;
