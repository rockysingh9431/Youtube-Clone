import React from "react";
import { toggleMenu } from "../utils/sideBarSlice";
import { useSelector, useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../config";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  const isWatchPage = useSelector((store) => store.sidebar.isWatchPage);

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
  //How to enable custom scroller in this sidebar using tailwind css?
  return (
    <>
      {isMenuOpen && (
        <div
          className={`bg-white h-[676px] w-60 hover:overflow-auto custom-scrollbar ${
            !isWatchPage && "mt-16"
          } ${isWatchPage && "z-20 fixed"}`}
        >
          {isWatchPage && (
            <div className="flex col-span-1">
              <button
                className="mx-2 rounded-full p-2 hover:bg-slate-200"
                onClick={() => toggleSideBar()}
              >
                <img
                  className="h-6 w-6"
                  src="https://cdn-icons-png.freepik.com/512/9293/9293128.png"
                  alt="navbar-icon"
                />
              </button>
              <button>
                <a href="/">
                  <img
                    className="h-6 mx-2"
                    src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
                    alt="youtube-logo"
                  />
                </a>
              </button>
            </div>
          )}
          <div>
            <div className="overflow-auto">
              <div className="divide-y overflow-hidden divide-gray-200">
                <div className="p-1">
                  <div>
                    {navList.map((item, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="p-1 pl-0 m-1 ml-0 flex"
                      >
                        <span className="p-1 mr-5">
                          <img
                            className="h-4"
                            src={CDN_IMG_URL}
                            alt="music-logo"
                          />
                        </span>
                        <span>{item}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-3 divide-y-2 divide-gray-200">
                  <div>
                    {yourInfoList.map((item, index) => (
                      <div key={index} className="p-1 pl-0 m-1 ml-0 flex">
                        <span className="p-1 mr-5">
                          <img
                            className="h-4"
                            src={CDN_IMG_URL}
                            alt="music-logo"
                          />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3">
                  <div>
                    {exploreList.map((item, index) => (
                      <div key={index} className="p-1 pl-0 m-1 ml-0 flex">
                        <span className="p-1 mr-5">
                          <img
                            className="h-4"
                            src={CDN_IMG_URL}
                            alt="music-logo"
                          />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMenuOpen && !isWatchPage && (
        <div className="mt-14 w-24 divide-y divide-gray-900">
          <div className="h-full hover:bg-slate-300">
            {navList.map((item, index) => (
              <Link key={index} to="/" className="p-0.5 pl-0 ml-0 flex">
                <ul>
                  <li className="text-center text-xs">{item}</li>
                  <li className="p-2 mr-5">
                    <img
                      className="h-6 ml-6"
                      src={CDN_IMG_URL}
                      alt="music-logo"
                    />
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;

//what does scan do in html?
