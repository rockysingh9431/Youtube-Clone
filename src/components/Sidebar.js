import React from "react";
import { useSelector } from "react-redux";
import { CDN_IMG_URL } from "../config";
import { Link  } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isMenuOpen);
  const navList = ["Home", "Shorts", "Subscriptions", "Youtube Music"];
  const yourInfoList = [
    "Your Channel",
    "History",
    "Your Videos",
    "Watch Later",
    "Downloads",
    "Show More",
  ];
  const exploreList = [
    "Trending",
    "Shopping",
    "Music",
    "Live",
    "Gaming",
    "News",
    "Sport",
    "Learning",
    "Fashion & Beauty",
    "Podcasts",
  ];
  if (!isMenuOpen) return null;
  return (
    <div className="divide-y divide-gray-200 w-64">
      <div className="fixed overflow-hidden hover:overflow-auto top-16 h-5/6">
        <div className="p-3 ">
          <div>
            {navList.map((item, index) => (
                <Link key={index}to="/" className="p-1 m-1 flex">
                  <span className="p-1 mr-5">
                    <img className="h-4" src={CDN_IMG_URL} alt="music-logo" />
                  </span>
                  <span>{item}</span>
                </Link>
            ))}
          </div>
        </div>
        <div className="p-3 divide-y-2 divide-gray-200">
          <div>
            {yourInfoList.map((item, index) => (
              <div key={index} className="p-1 m-1 flex">
                <span className="p-1 mr-5">
                  <img className="h-4" src={CDN_IMG_URL} alt="music-logo" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3">
          <div>
            {exploreList.map((item, index) => (
              <div key={index} className="p-1 m-1 flex">
                <span className="p-1 mr-5">
                  <img className="h-4" src={CDN_IMG_URL} alt="music-logo" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
