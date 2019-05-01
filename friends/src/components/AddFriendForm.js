import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addFriend } from "../actions";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  addFriend = event => {
    event.preventDefault();
    this.props
      .addFriend(this.state)
      .then(() => this.props.history.push("/friends"));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ addingData }) => ({
  addingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { addFriend }
  )(AddFriendForm)
);
