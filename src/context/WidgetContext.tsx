import React, { createContext, useContext, useState } from "react";

export type WidgetContextType = {
  widgetSettings: { id: number; active: boolean }[];
  setWidgetSettings: React.Dispatch<React.SetStateAction<{ id: number; active: boolean }[]>>
  handleUpdateSettings: (id:number,propertyValue: {active:boolean}) => void;
}

export const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

const WidgetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [widgetSettings, setWidgetSettings] = useState<
    { id: number; active: boolean }[]
  >([]);

  const handleUpdateSettings = (
    id: number,
    propertyValue: { active: boolean }
  ) => {
    setWidgetSettings((prevWidgets) => {
      return prevWidgets.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            ...propertyValue,
          };
        } else {
          // Ensure only one widget can have the active state
          if (propertyValue.active) {
            return {
              ...obj,
              active: false,
            };
          }
        }
        return obj;
      });
    });
  };

  return (
    <WidgetContext.Provider
      value={{
        handleUpdateSettings,
        widgetSettings,
        setWidgetSettings,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => useContext<any>(WidgetContext);

export default WidgetContextProvider;
