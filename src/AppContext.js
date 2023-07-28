import React, { createContext, useContext, useReducer, useState } from "react";

const AppContext = createContext();

const initialState = {
  selectedComponents: [],
};

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        selectedComponents: [...state.selectedComponents, action.payload],
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
