import React, { FC, createContext, useEffect, useState } from "react";
import { THEMES } from "../constants";
import { ThemeSettings } from "../interfaces";

interface ContextProps {
  settings: ThemeSettings;
  saveSettings: (updatedSettings: ThemeSettings) => void;
}

const initialSettings: ThemeSettings = {
  compact: true,
  direction: "ltr",
  responsiveFontSizes: true,
  roundedCorners: true,
  theme: THEMES.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        compact: true,
        direction: "ltr",
        responsiveFontSizes: true,
        roundedCorners: true,
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? THEMES.DARK
          : THEMES.LIGHT,
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
  saveSettings: (settings: ThemeSettings) => {
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
  const value = { settings, saveSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
