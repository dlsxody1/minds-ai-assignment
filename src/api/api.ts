import axios from "axios";
import { TodoProps } from "../types/TodoProps";

export const getTodo = async (): Promise<TodoProps[]> => {
  const { data } = await axios.get(import.meta.env.VITE_API);
  return data;
};
