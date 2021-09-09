import React from "react";

import { Link } from "react-router-dom";

function Choices() {
  return (
    <nav>
      <Link exact to="/cookie">
        Cookie
      </Link>
      <Link exact to="/candy">
        Candy
      </Link>
      <Link exact to="/soda">
        Soda
      </Link>
    </nav>
  );
}

export default Choices;
