import * as AT from "./actionTypes";

// Let's build some action creators 😃
import axios from "axios";

export const login = creds => dispatch => {
  dispatch({ type: AT.LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: AT.LOGIN_SUCCESS });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: AT.LOGIN_FAILURE });
    });
};

export const getData = () => dispatch => {
  dispatch({ type: AT.FETCH_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: AT.FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const addFriend = friend => dispatch => {
  console.log(friend);
  dispatch({ type: AT.ADDING_DATA_START });
  return axios
    .post("http://localhost:5000/api/friends", friend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.ADDING_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: AT.FETCH_DATA_FAILURE, payload: err.response });
    });
};
