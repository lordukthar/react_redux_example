import React from "react";
import { Link } from "react-router-dom";
import { BrandButtonDefault } from "../../library/Button";

const jalla = () => {
  console.log("Click");
};

const SignUpButton = () => (
  <Link to="/signup" className="mr-5">
    <BrandButtonDefault
      type="button"
      value="Sign up"
      onClick=""
      event={jalla}
    />
  </Link>
);

export default SignUpButton;
