import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

axios.defaults.baseURL = "https://biz-backe.herokuapp.com";

ReactDOM.render(<App />, document.getElementById("root"));
