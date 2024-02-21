import React from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../config";
import { Link } from "react-router-dom";
import useGetVideos from "../utils/useGetVideos";
import Demo from "./Demo";
const VideoContainer = () => {
  const videos = useGetVideos(YOUTUBE_VIDEO_API);
  return videos ? (
    <div className="flex flex-wrap p-2">
      {videos.map((videoInfo) => {
        return (
          <Link key={videoInfo.id} to={"/watch?v=" + videoInfo.id}>
            <VideoCard info={videoInfo} />
          </Link>
        );
      })}

      <Link to="/demo">
        <Demo/>
      </Link>
    </div>
  ) : null;
};

export default VideoContainer;
