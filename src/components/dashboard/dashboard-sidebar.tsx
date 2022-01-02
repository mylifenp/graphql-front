import { FC, useEffect, useRef, useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { TFunction, useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItem,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../assets/images/logo.png";

interface Props {
  onClose: () => void;
  open: boolean;
}

const getSections = (t: TFunction<"translation", undefined>) => [
  {
    title: t("_sensors"),
    path: "/dashboard/sensors",
    icon: <ImageAspectRatioIcon fontSize="small" />,
  },
  {
    title: t("_settings"),
    path: "/dashboard/settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

export const DashboardSidebar: FC<Props> = (props) => {
  const { onClose, open } = props;
  const location = useLocation();
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });
  const sections = useMemo(() => getSections(t), [t]);
  const organizationsRef = useRef(null);

  const handlePathChange = () => {
    if (!location) {
      return;
    }
    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange, [location.pathname, open, onClose, location]);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <RouterLink to="/">
              <Button>
                <Box
                  component="img"
                  sx={{ height: 40 }}
                  alt="logo"
                  src={Logo}
                />
              </Button>
            </RouterLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              ref={organizationsRef}
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Lensation GmbH
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {sections.map((section) => (
            <ListItem
              disableGutters
              key={section.title}
              sx={{
                display: "flex",
                mb: 0.5,
                py: 0,
                px: 2,
              }}
            >
              <RouterLink
                to={section.path}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  component="a"
                  startIcon={section.icon}
                  disableRipple
                  sx={{
                    backgroundColor: "rgba(255,255,255, 0.08)",
                    borderRadius: 1,
                    color: "white",
                    fontWeight: "fontWeightBold",
                    justifyContent: "flex-start",
                    pr: 3,
                    textAlign: "left",
                    textTransform: "none",
                    width: "100%",
                    "& .MuiButton-startIcon": {
                      color: "white",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255, 0.08)",
                    },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>{section.title}</Box>
                </Button>
              </RouterLink>
            </ListItem>
          ))}
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748", // dark divider
          }}
        />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
