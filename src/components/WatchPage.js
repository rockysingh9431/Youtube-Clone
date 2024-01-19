import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {closedMenu} from "../utils/sideBarSlice"
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
    const [searchParams]=useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="m-2 p-2">
      <iframe
      className="rounded-xl"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
