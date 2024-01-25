import React from "react";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";
const MainContainer = () => {
  return (
    <div className="w-11/12">
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
