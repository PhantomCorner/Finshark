import axios from "axios";
import type {CommentGet, CommontPost} from "../Models/Comment";
import {handleError} from "../Helper/ErrorHandler";

const API_URL = "http://localhost:5254/api/comment";
export const commentPostAPI = async function (
  title: string,
  content: string,
  symbol: string
) {
  try {
    const data = await axios.post<CommontPost>(`${API_URL}/${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (e) {
    handleError(e);
  }
};
export const commentGetAPI = async function (symbol: string) {
  try {
    const data = await axios.get<CommentGet[]>(`${API_URL}/?Symbol=${symbol}`);
    return data;
  } catch (e) {
    handleError(e);
  }
};
