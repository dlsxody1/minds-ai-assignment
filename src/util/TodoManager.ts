import { TodoProps } from "../types/TodoProps";
import { LocalStorageManager } from "./localStorageManager";

export class TodoManager {
  add(inputData: string, storage: LocalStorageManager) {
    const todos = storage.get("todo") || [];
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo: TodoProps = {
      userId: 1,
      id: newId,
      title: inputData,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    storage.set("todo", updatedTodos);
  }

  complete(id: number, storage: LocalStorageManager) {
    const todos = storage.get("todo") || [];
    const updatedTodos = todos.map((todo: TodoProps) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    storage.set("todo", updatedTodos);
  }

  delete(id: number, storage: LocalStorageManager) {
    const todos = storage.get("todo") || [];
    const updatedTodos = todos.filter((todo: TodoProps) => todo.id !== id);

    storage.set("todo", updatedTodos);
  }
}
