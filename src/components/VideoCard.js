import React from "react";
import { useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle,  thumbnails, title } = snippet;
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);

  return (
    <div
      className={
        isMenuOpen
          ? "m-1 rounded-sm shadow-md h-80 w-[350px]"
          : "m-1 rounded-sm shadow-md h-72 w-[350px]"
      }
    >
      <img
        className={
          isMenuOpen
            ? "rounded-lg w-[370px] p-2"
            : "rounded-lg w-[310px] p-2"
        }
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="p-2">
        <li>{title.slice(0, 50)}...</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
