"use client"
import store from "./store";

const { Provider } = require("react-redux");

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
