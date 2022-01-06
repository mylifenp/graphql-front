import { FC } from "react";
import { SnackbarProvider } from "notistack";
import { useRoutes } from "react-router";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "./theme";
import routes from "./routes";
import GlobalStyles from "./components/GlobalStyles";
import useSettings from "./hooks/useSettings";
import useScrollReset from "./hooks/use-scroll-reset";
import "./assets/i18n";

interface Props {}

const App: FC<Props> = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();
  useScrollReset();

  return (
    <ThemeProvider
      theme={createTheme({
        ...settings,
      })}
    >
      <SnackbarProvider dense maxSnack={3}>
        <GlobalStyles />
        {content}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
