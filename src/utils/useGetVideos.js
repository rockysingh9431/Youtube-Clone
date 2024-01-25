import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "./sideBarSlice";

const useGetVideos = (VIDEO_API) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.searchText.search);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    dispatch(openMenu());
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
};
export default useGetVideos;
