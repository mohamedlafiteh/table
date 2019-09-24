import React, { Component } from "react";
import ViewTable from "./ViewTable";
import EditRow from "./EditRow";
export class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: "Mo", country: "Libya" },
        { id: 2, name: "Joe", country: "America" },
        { id: 3, name: "jim", country: "China" }
      ],
      selectedEditRowId: null
    };
  }
  editRow = id => {
    this.setState({
      selectedEditRowId: id
    });
  };
  saveRow = (id, name, country) => {
    const newData = this.state.data.filter(row => row.id !== id);
    const updatedRow = { id, name, country };
    newData.splice(id - 1, 0, updatedRow);
    this.setState({
      selectedEditRowId: null,
      data: newData
    });
  };

  render() {
    return (
      <div>
        <form>
          <ttable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(row => {
                if (row.id === this.state.selectedEditRowId) {
                  return (
                    <EditRow
                      id={row.id}
                      name={row.name}
                      country={row.country}
                      saveRow={this.saveRow}
                    />
                  );
                } else {
                  return (
                    <ViewTable
                      id={row.id}
                      name={row.name}
                      country={row.country}
                      editRow={this.editRow}
                    />
                  );
                }
              })}
            </tbody>
          </ttable>
        </form>
      </div>
    );
  }
}

export default DataTable;
