import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { ME } from "../../operations/queries/user";
import { loggedUser } from "../../cache";

interface Props {}

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const DashboardLayout: FC<Props> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data, error, loading } = useQuery(ME);

  if (error) return <p>error fetching user</p>;
  if (loading) return <p>loading</p>;
  loggedUser(data.me);
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;
