import { useEffect, useState } from "react";
import { SEARCH_API } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearch } from "../utils/searchSlice";
import { searchData } from "../utils/setSearch";
const SearchBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(
    () => {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSearchSuggestion(searchCache[searchQuery]);
        } else {
          getSearchSuggestion();
        }
      }, 200);
      return () => clearTimeout(timer);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchQuery]
  );

  const getSearchSuggestion = async () => {
    const Suggestion = await fetch(SEARCH_API + searchQuery);
    const json = await Suggestion.json();
    if (json[0] !== "undefined") {
      setSearchSuggestion(json[1]);
      dispatch(
        cacheSearch({
          [searchQuery]: json[1],
        })
      );
    }
    console.log("searchCache"+searchQuery)
  };
  return (
    <div className="">
      <div className="mt-1 flex">
        <div id="input-card" className="static">
          {isVisible && (
            <img
              className="absolute h-6 p-1 pl-2 mt-1.5 ml-2"
              src="https://cdn.iconscout.com/icon/free/png-512/free-search-1767866-1502119.png?f=webp&w=256"
              alt="search-icon"
            />
          )}
          <input
            className="xl:w-[576px] lg:w-96 md:w-72 sm:w-52 focus:pl-10 h-9 p-4 pl-4 rounded-l-full border border-slate-300"
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
          />
        </div>
        <button className="bg-slate-100 hover:bg-slate-200 rounded-r-full border-l-0 border border-slate-300 h-9 p-1 w-14">
          <img
            className="h-5 ml-2"
            src="https://cdn.iconscout.com/icon/free/png-512/free-search-1767866-1502119.png?f=webp&w=256"
            alt="search-icon"
          />
        </button>
        <div className="mx-6">
          <button className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full">
            <img
              className="h-4"
              src="https://cdn-icons-png.freepik.com/512/709/709682.png?ga=GA1.1.686928749.1705407277&"
              alt="mic-logo"
            />
          </button>
        </div>
      </div>
      {isVisible && (
        <div className="bg-white absolute rounded-lg w-[576px]">
          <div className="my-3">
            {searchSuggestion.map((suggestion) => (
              <div
                key={suggestion}
                className="flex p-1.5 m-0.5 hover:bg-slate-200"
                onMouseDown={() => {
                  setSearchQuery(suggestion);
                  dispatch(searchData(suggestion));
                }}
              >
                <img
                  className="h-6 p-1 mx-2"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-search-1767866-1502119.png?f=webp&w=256"
                  alt="search-icon"
                />
                <p>{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBox;
