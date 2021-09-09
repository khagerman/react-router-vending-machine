import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Choices from "./Choices";
import Candy from "./Candy";
import Soda from "./Soda";
import Cookie from "./Cookie";

const VendingMachine = () => {
  return (
    <>
      <h1>Welcome to the Vending Machine- what would you like?</h1>
      <Choices />
      <img src="https://www.amequipmentsales.com/wp-content/uploads/2015/12/usi3538.png" />
    </>
  );
};
export default VendingMachine;
