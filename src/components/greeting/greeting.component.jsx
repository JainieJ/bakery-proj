import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLoggedInUserName } from "../../redux/user/user.selectors";

const Greeting = ({ userName }) => {
  return <div>{userName ? `Hello, ${userName}` : "Hello"}</div>;
};

const mapStateToProps = createStructuredSelector({
  userName: selectLoggedInUserName
});

export default connect(mapStateToProps)(Greeting);
