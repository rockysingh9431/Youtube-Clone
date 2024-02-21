import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedMenu, onWatchPage } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const isWatchPage = useSelector((store) => store.sidebar.isWatchPage);
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMenuOpen) dispatch(closedMenu());
    if (!isWatchPage) dispatch(onWatchPage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-16">
      <div className="flex justify-end">
        <div className="m-2 p-2">
          <iframe
            className="rounded-xl"
            width="1050"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentBox />
    </div>
  );
};

export default WatchPage;
