import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { MainNavbar } from "./main-navbar";
import { MainSidebar } from "./main-sidebar";

interface Props {}

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

const MainLayout: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <MainNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <MainSidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      {children || <Outlet />}
      <Footer />
    </MainLayoutRoot>
  );
};

export default MainLayout;
