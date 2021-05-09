import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
const AppContextUpdate = createContext(null);
export interface StateInterface {
  mobileNumber?: any;
  nationalCode?: any;
  companyNationalCode?: any;
  reportType?: "haghighi" | "hoghoughi";
  trackId?: any;
}
export function AppWrapper({ children }) {
  const [state, setState] = useState<StateInterface>({});
  const updateState = (newState) => {
    setState({
      ...state,
      ...newState,
    });
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

// export const useCustemHookContext = () => {
//   const state = useAppContext();
//   const updateState = useAppContextUpdate();
//   return [state, updateState];
// };
