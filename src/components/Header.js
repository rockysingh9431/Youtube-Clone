import React from "react";
import {useDispatch} from "react-redux"
import { toggleMenu } from "../utils/sideBarSlice";
import SearchBox from "./SearchBox";

const Header = () => {

  const dispatch=useDispatch();
  const toggleSideBar=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="grid grid-flow-col p-1">
        <div className="flex p-1 col-span-1">
          <button
            className=" mx-2 rounded-full p-3 hover:bg-slate-200"
            onClick={() => toggleSideBar()}
          >
            <img
              className="h-5"
              src="https://pic.onlinewebfonts.com/thumbnails/icons_422593.svg"
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
        <div className="mt-1 flex justify-center">
          <SearchBox />
        </div>
        <div className="col-span-1 p-1 flex justify-end">
          <button>
            <img
              className="h-6 mx-3"
              src="https://i.pinimg.com/736x/38/66/ff/3866ff54d5c07cb2c248b8c4181ece09.jpg"
              alt="video-logo"
            />
          </button>
          <button>
            <img
              className="h-6 mx-3"
              src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/notification-icon.png"
              alt="notification-logo"
            />
          </button>
          <button>
            <img
              className="h-6 mx-3"
              src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png"
              alt="profile-logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
