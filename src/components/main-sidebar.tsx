import React, { FC, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Drawer, Link, Theme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  onClose: () => void;
  open: boolean;
}

const MainSidebarLink = styled(Link)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const MainSidebar: FC<Props> = (props) => {
  const { onClose, open } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{ sx: { width: 256 } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <RouterLink to="/dashboard">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Live Demo
          </MainSidebarLink>
        </RouterLink>
        <RouterLink to="/browse">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Components
          </MainSidebarLink>
        </RouterLink>
        <RouterLink to="/docs/welcome">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Documentation
          </MainSidebarLink>
        </RouterLink>
      </Box>
    </Drawer>
  );
};
