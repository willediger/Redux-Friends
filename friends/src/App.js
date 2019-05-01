import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import SingleFriend from "./components/SingleFriend";
import AddFriendForm from "./components/AddFriendForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/add-friend">Add Friend</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute exact path="/friends/:id" component={SingleFriend} />
        <PrivateRoute exact path="/add-friend" component={AddFriendForm} />
      </div>
    </Router>
  );
}

export default App;
