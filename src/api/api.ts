import axios from "axios";
import { TodoTypes } from "../types/TodoTypes";

export const getTodo = async (): Promise<TodoTypes[]> => {
  const { data } = await axios.get(import.meta.env.VITE_API);
  return data;
};
