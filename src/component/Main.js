import React from "react";
import Weather from "./weather.component";
import Content from "./Content";

const Main = () => {
  return (
    <div className="main">
      <Content>
        <Weather />
      </Content>
    </div>
  );
};

export default Main;
