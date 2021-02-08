import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [],
    };
  }
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.props.subscribersList.map((subscriber) => {
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

export default ShowSubscribers;
