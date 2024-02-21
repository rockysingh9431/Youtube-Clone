import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { onHome, openMenu } from "../utils/sideBarSlice";
import { useDispatch } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onHome());
    dispatch(openMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex p-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
