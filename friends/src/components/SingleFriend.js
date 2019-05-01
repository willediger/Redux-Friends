import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getData } from "../actions";

class SingleFriend extends React.Component {
  componentDidMount() {
    if (!this.props.friends || !this.props.friends.length) {
      this.props.getData();
    }
  }

  render() {
    let friend = null;
    if (this.props.friends) {
      friend = this.props.friends.find(
        friend => `${friend.id}` === this.props.match.params.id
      );
      if (!friend) {
        this.props.getData();
      }
    }
    if (!friend) {
      return <h2>Loading friend data</h2>;
    }
    return (
      <div className="friends">
        <div className="friend">
          <div className="friend-info">
            <h3>{friend.name}</h3>
            <p>{friend.age} years old</p>
            <p>{friend.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
  friends,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(SingleFriend)
);
