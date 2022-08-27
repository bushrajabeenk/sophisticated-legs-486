import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

// below code is example from reqres api
export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  console.log(data,'here')
  axios.post("https://infinite-thicket-15273.herokuapp.com/getemail", {
      email: data
     
    })
    .then((r) => {
      
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
      console.log(r.data)
    
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logoutAPI = () => ({ type: LOGOUT });
