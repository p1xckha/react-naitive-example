/************************ 
  ToDoContext.js 
*************************/
import React, { useState, useContext, createContext } from "react";

const ToDoContext = createContext();

export function useToDoContext() {
  return useContext(ToDoContext);
}

export function ToDoProvider({ children }) {
  const [toDos, setToDos] = useState([]);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
}
