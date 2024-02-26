import CommentList from "./CommentList";
import { commentData } from "../config";
import { useState } from "react";
const CommentBox = () => {
  const [showComments, setShowComments] = useState(false);
  const [textShow,setTextShow]=useState("Show Comments")
  return (
    <div className=" ml-4">
      <div className="flex mb-4">
        <p className="font-semibold p-3 text-2xl">Comments</p>
        <button
          className="ml-44 text-xl font-medium p-3"
          onClick={() => {
            setShowComments(showComments ? false : true);
            setTextShow(showComments ? "Show Comments" : "Hide Comments");
          }}
        >
          {textShow}
        </button>
      </div>
      {showComments && <CommentList comments={commentData} />}
    </div>
  );
};
export default CommentBox;
