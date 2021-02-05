import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [
        { id: 1, name: "Shilpa Bhat", phone: "11111111111" },
        { id: 2, name: "Srishti Goel", phone: "9999999999" },
      ],
    };
  }
  clickHandler(message) {
    alert(message);
  }

  render() {
    // let subscribers = [

    // ];
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.state.subscribersListToShow.map((subscriber) => {
            return (
              <div key={subscriber.id} className="grid-container">
                <span className="grid-item">{subscriber.name}</span>
                <span className="grid-item">{subscriber.phone}</span>
                <span>
                  <button
                    className="delete-btn"
                    onClick={this.clickHandler.bind(
                      this,
                      "Delete Handler Clicked"
                    )}
                  >
                    DELETE
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
