import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { onHome, openMenu } from "../utils/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  const isWatchPage = useSelector((store) => store.sidebar.isWatchPage);
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);

  useEffect(() => {
    dispatch(onHome());
    dispatch(openMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex p-2">
      <div className="fixed">
        <Sidebar />
      </div>
      <div
        className={`${!isWatchPage && isMenuOpen ? "ml-60" : "ml-24"} mt-14`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
