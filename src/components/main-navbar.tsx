import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  // Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { Logo } from "./logo";
import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";

interface Props {
  onOpenSidebar: () => void;
}

export const MainNavbar: FC<Props> = (props) => {
  const { onOpenSidebar } = props;
  const { t } = useTranslation();

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <RouterLink to="/">
            <Button>
              <Box component="img" sx={{ height: 40 }} alt="logo" src={Logo} />
              {/* <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "none",
                  },
                  height: 40,
                  width: 40,
                }}
                variant={"light"}
              /> */}
            </Button>
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <RouterLink to="/dashboard">
              <Typography>{t("_dashboard")}</Typography>
            </RouterLink>
            {/* <RouterLink to="/browse">
              <Link
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Components
              </Link>
            </RouterLink> */}
            {/* <RouterLink to="/docs/welcome">
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Documentation
              </Link>
            </RouterLink> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
