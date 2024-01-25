import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import {
  randomIdGenerator,
  randomNameGenerator,
  randomTextGenerator,
} from "../utils/helper";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatDetails = useSelector((store) => store.liveChat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomTextGenerator(20) + "❤️❤️❤️",
          id: randomIdGenerator(),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className=" mt-4 border border-slate-400 rounded-lg">
        <p className="text-lg p-2 font-medium rounded-t-lg border mx-0 border-b-slate-400">
          LiveChat
        </p>
        <div className="h-[455px] p-1 w-[380px] overflow-y-scroll flex flex-col-reverse">
          {chatDetails.map((chat) => {
            return (
              <ChatMessage
                key={chat.id}
                name={chat.name}
                message={chat.message}
              />
            );
          })}
        </div>
        <form
          className="w-[380px] border rounded-b-lg border-t-slate-400 focus:border-blue-400"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Rocky",
                message: liveMessage,
                id: randomIdGenerator(),
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            value={liveMessage}
            type="text"
            className="w-80 p-1 border border-r-slate-400"
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="bg-emerald-400 h-8 w-[58px]">Send</button>
        </form>
      </div>
    </>
  );
};
export default LiveChat;
