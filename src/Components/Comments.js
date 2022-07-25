import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction } from "../Services/Actions/Actions";


const Comments = () => {
  const { isLoading, comments, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAction());
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      {comments && comments.map((comment)=>{
        return <article key={comment.id}>
            <p>{comment.body}</p>
        </article>
      })}
    </div>
  );
};

export default Comments;
