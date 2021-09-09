import React from "react";
import ReturnHome from "./ReturnHome";

function Candy() {
  return (
    <div>
      <h1>Here is your candy!</h1>
      <img
        src="https://media1.giphy.com/media/iGpHu3qWixXRlyctPs/giphy.gif?cid=ecf05e47kp9td1zxejzw8sli11vl2vksm37o55midzv4prro&rid=giphy.gif&ct=s"
        alt="skittles"
      />
      <p>Enjoy!</p>
      <ReturnHome />
    </div>
  );
}

export default Candy;
