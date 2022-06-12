import React, { useState } from "react";
import heroDesktop from "./images/hero-desktop.jpg";
import heroMobile from "./images/hero-mobile.jpg";
import logo from "./images/logo.svg";
import "./App.css";
import { useWindowSize } from "./hooks/useWindowSize";
import Input from "./components/Input";

const App = () => {
  const [width] = useWindowSize();
  const [email, setEmail] = useState("");
  const imgSrc = width < 900 ? heroMobile : heroDesktop;

  const isValidEmail = (value) => {
    const pattern = /^([a-zA-Z]|[0-9]|[._])+@[a-z]+[.][a-z]{2,3}$/;
    return pattern.test(value);
  };

  return (
    <div className="app-wrapper">
      <div className="text-content">
        <img src={logo} alt="logo" className="collapse" />
        <h1 className="header">
          <span className="header-part-1">We're</span> coming soon
        </h1>
        <p className="para">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Input
          value={email}
          onChange={(value) => setEmail(value)}
          isValid={isValidEmail(email)}
          validationMessage={"Please provide a valid email"}
          placeholder={"Email Address"}
        />
      </div>
      <div className="img-container">
        <img src={imgSrc} alt="hero" />
      </div>
      <img src={logo} alt="logo" className="mobile" />
    </div>
  );
};

export default App;
