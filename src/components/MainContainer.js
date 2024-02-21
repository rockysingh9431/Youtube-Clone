import React from "react";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";
const MainContainer = () => {
  return (
    <div className="mt-14 w-11/12">
      <div className="w-full fixed ml-3 top-14">
        <ButtonList />
      </div>
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
