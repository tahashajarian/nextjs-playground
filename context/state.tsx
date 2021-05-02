import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
const AppContextUpdate = createContext(null);

export function AppWrapper({ children }) {
  const [state, setState] = useState(true);
  const updateState = () => {
    setState(!state);
  };

  return (
    <AppContext.Provider value={state}>
      <AppContextUpdate.Provider value={updateState}>
        {children}
      </AppContextUpdate.Provider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
export function useAppContextUpdate() {
  return useContext(AppContextUpdate);
}

export const useCustemHookContext = () => {
  const state = useAppContext();
  const updateState = useAppContextUpdate();
  return [state, updateState];
};
