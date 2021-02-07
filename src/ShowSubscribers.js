import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [],
    };
  }
  clickHandler(message) {
    alert(message);
  }

  componentDidMount() {
    let newSubscriber = { id: 1, name: "Shilpa Bhat", phone: "11111111111" };
    let subscriberList = this.state.subscribersListToShow;
    subscriberList.push(newSubscriber);
    this.setState({ subscribersListToShow: subscriberList });
  }
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

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
