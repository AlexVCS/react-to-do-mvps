import {createContext, useContext, useReducer} from "react";

// let uuid = self.crypto.randomUUID();

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function ListProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}