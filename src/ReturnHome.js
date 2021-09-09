import React from "react";

import { Link } from "react-router-dom";

function ReturnHome() {
  return (
    <Link exact to="/">
      Vending Machine
    </Link>
  );
}

export default ReturnHome;
