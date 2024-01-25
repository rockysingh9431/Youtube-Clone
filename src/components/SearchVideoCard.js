const SearchVideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { channelTitle, thumbnails, title, description } = videoInfo;

  return (
    <div>
      <div className="m-2 p-2 flex">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnails"
        />
        <div className="ml-2 p-3 ">
          <p className="font-medium text-xl p-1">{channelTitle}</p>
          <p className="font-normal text-lg p-1">{title}</p>
          <p className="font-normal text-md text-slate-600 p-1">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchVideoCard;
