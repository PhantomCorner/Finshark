import React, {useEffect, useState} from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import {commentGetAPI, commentPostAPI} from "../../Services/CommentService";
import {toast} from "react-toastify";
import type {CommentGet} from "../../Models/Comment";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";

type Props = {
  stockSymbol: string;
};
type CommentFormInputs = {
  title: string;
  content: string;
};
const StockComment = ({stockSymbol}: Props) => {
  const [comments, setComment] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    getComments();
  }, []);
  const handleComment = function (e: CommentFormInputs) {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment Created");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };
  const getComments = function () {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComment(res?.data!);
    });
  };
  return (
    <>
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
      <div className="flex felx-col">
        {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      </div>
    </>
  );
};

export default StockComment;
