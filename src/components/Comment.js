const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <>
      <div className="flex p-3 border-l border-emerald-500">
        <img
          className="h-8 mx-3"
          src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png"
          alt="profile-logo"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};
export default Comment;