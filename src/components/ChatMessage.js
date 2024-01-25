const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex">
      <img
        className="h-5 mt-1.5 "
        src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png"
        alt="profile-logo"
      />
      <p className="text-md font-medium mx-2 p-1">{name}</p>
      <p className="p-1">{message}</p>
    </div>
  );
};
export default ChatMessage;
