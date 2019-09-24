import React, { Component } from "react";

export class EditRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEditValue: props.name,
      countryEditValue: props.country
    };
  }
  handleChange = e => {
    this.setState({
      [`${e.target.name}EditValue`]: e.target.value
    });
  };

  handleSave = () => {
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
          <td>{this.props.id}</td>
          <td>
            <label className="screenreader" for="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.nameEditValue}
              onChange={this.handleChange}
            />
          </td>
          <td>
            <label className="screenreader" for="country">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={this.state.countryEditValue}
              onChange={this.handleChange}
            />
          </td>
          <td>
            <button onClick={this.handleSave}>Save</button>
          </td>
        </tr>
      </div>
    );
  }
}

export default EditRow;
