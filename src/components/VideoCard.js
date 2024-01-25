import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
      <div className="m-3 rounded-lg h-80 w-80 shadow-2xl shadow-gray-400">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <ul className="p-2">
          <li>{title.slice(0, 70)}...</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
  );
};

export default VideoCard;
