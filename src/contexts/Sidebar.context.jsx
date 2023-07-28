import { createContext, useState } from 'react';

/* 
  Créer un context par defaut => Prend la forme des infos que l'on souhaite passer à nos composants
*/
export const SidebarContext = createContext({
  isShowed: false,
  setIsShowed: (value) => {},
});

export const SidebarProvider = ({ children }) => {
  const [isShowed, setIsShowed] = useState(false);

  const value = { isShowed, setIsShowed };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
