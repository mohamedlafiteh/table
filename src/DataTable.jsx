import React, { Component } from "react";
import EditRow from "./EditRow";
import ViewTable from "./ViewTable";
export class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: "Mohamed", country: "Libya" },
        { id: 2, name: "Sam", country: "Sudan" },
        { id: 3, name: "Hamza", country: "Poland" }
      ],
      selectedEditIdRow: null
    };
  }
  editRow = id => {
    this.setState({
      selectedEditIdRow: id
    });
  };

  saveRow = (id, name, country) => {
    const newData = this.state.data.filter(row => row.id !== id);
    const updateRow = { id, name, country };
    newData.splice(id - 1, 0, updateRow);
    this.setState({
      selectedEditIdRow: null,
      data: newData
    });
  };
  render() {
    return (
      <div>
        <form>
          <ttable className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Country</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <body>
              {this.state.data.map(row => {
                if (row.id === this.state.selectedEditIdRow) {
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
            </body>
          </ttable>
        </form>
      </div>
    );
  }
}

export default DataTable;
