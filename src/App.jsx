import "./App.css";
import React from "react";
import {
  Footer,
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers/index";

import { CTA, Brand, NavBar } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
