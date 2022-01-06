import React, { FC, createContext, useEffect, useState } from "react";
import { ThemeSettings } from "../interfaces";

interface ContextProps {
  settings: ThemeSettings;
  saveSettings: (updatedSettings: ThemeSettings) => void;
}

const initialSettings: ThemeSettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: "light",
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        direction: "ltr",
        responsiveFontSizes: true,
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: ThemeSettings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

const SettingsContext = createContext<ContextProps>({
  settings: initialSettings,
  saveSettings: (_settings: ThemeSettings) => {
    return;
  },
});

export const SettingsProvider: FC = ({ children }) => {
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings: ThemeSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
