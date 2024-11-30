import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [CurrentPageDashboard, setCurrentPageDashboard] = useState(null);

  const ChangePageDashboard = (page) => {
    setCurrentPageDashboard(page);
  };

  return (
    <AppContext.Provider value={{ CurrentPageDashboard, ChangePageDashboard }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
