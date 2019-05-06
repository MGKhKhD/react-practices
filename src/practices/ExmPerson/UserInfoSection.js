import React from "react";

import classes from "./UserInfoSection.module.css";

const UserInfoSection = props => {
  console.log(props.user);
  return <div className={classes.UserInfoSection}>UserInfoSection</div>;
};

export default UserInfoSection;
