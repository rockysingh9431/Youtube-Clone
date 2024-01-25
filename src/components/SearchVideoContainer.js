import SearchVideoCard from "./SearchVideoCard";
import { VIDEO_SEARCH_API } from "../config";
import useGetVideos from "../utils/useGetVideos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SearchVideoContainer = () => {
  const searchQuery = useSelector((store) => store.searchText.search);
  const encodedSearchQuery = encodeURIComponent(searchQuery);
  const YOUTUBE_SEARCH_API = VIDEO_SEARCH_API(encodedSearchQuery);
  const videos = useGetVideos(YOUTUBE_SEARCH_API);
  console.log(videos)
  if (videos.length === 0) return null;
  return (
    <div>
      <div className="m-1 p-2">
        {videos.map((video) => {
          return (
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
              <SearchVideoCard videoInfo={video.snippet} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default SearchVideoContainer;
