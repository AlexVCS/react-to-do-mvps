import {createContext, useContext, useReducer} from "react";

let uuid = self.crypto.randomUUID();

export const ListContext = createContext([
  {task: "", id: uuid, completed: false, edit: false},
]);
