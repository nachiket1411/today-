import React, { Component } from "react";
import Plan from "./Plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== " ") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: " " });
    }
  };

  handleDelete = (id) => {
    console.log("deleted", id);
    const OldItems = [...this.state.items];
    console.log("OldItems", OldItems);
    const items = OldItems.filter((element, i) => {
      return i !== id;
    });
    console.log("new Item ", items);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3 ">
            <h1 className="text-center"> - TODAYS PLAN -</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="write your plan "
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              {/* take one Button  */}
              <div className="col-2">
                <button
                  className="btn btn-warning px-3"
                  onClick={this.handleAdd}
                >
                  Add Here
                </button>
              </div>

              {/* new colum for add some text in input box the it will be add here 
              so we create a new text-box  */}
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
