import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEO_API } from "../config";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  console.log(videos);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap p-2">
      {videos.map((videoInfo) => {
        return (
          <div key={videoInfo.id} className=" m-2 w-80">
            <Link to={"/watch?v=" + videoInfo.id}>
              <VideoCard info={videoInfo} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
