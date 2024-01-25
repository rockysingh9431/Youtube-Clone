
import Comment from "./Comment";
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.map((comment) => {
          return (
            <div className="ml-3" key={comment.commentId}>
              <Comment data={comment} />

              <div className="pl-5">
                <CommentList comments={comment.replies} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default CommentList;
