import React from "react";
export const contextValues = {
  number: 5,
};

export const AppContext = React.createContext(
  contextValues.number // default value
);
