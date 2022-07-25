import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsReducer } from "../Services/Reducers/Reducers";

const Comments = () => {
  const { isLoading, comments, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsReducer());
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      {comments && comments.map((comment)=>{
        return <div>
            <p>{comment}</p>
        </div>
      })}
    </div>
  );
};

export default Comments;
