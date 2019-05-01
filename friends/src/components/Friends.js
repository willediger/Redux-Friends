import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { getData } from "../actions";

import SingleFriendForList from "./SingleFriendForList";

class Friends extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const friends = this.props.friends;
    return (
      <div className="friends">
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#200Af0" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {!this.fetchingData && friends.length > 0 && (
          <>
            {friends.map(f => (
              <Link to={`/friends/${f.id}`} key={f.id}>
                <SingleFriendForList friend={f} />
              </Link>
            ))}
          </>
        )}
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
  )(Friends)
);
