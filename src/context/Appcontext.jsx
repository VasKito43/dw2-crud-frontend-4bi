import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [CurrentPageDashboard, setCurrentPageDashboard] = useState(null); 
  const [SelectedUser, setSelectedUser] = useState(null); 

  const ChangePageDashboard = (page, user = null) => {
    setCurrentPageDashboard(page);
    setSelectedUser(user);
  };

  return (
    <AppContext.Provider value={{ CurrentPageDashboard, ChangePageDashboard, SelectedUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
