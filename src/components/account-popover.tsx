import { FC } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { client } from "../client";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "../utils/config";
import { useQuery } from "@apollo/client";
import { ME } from "../operations/queries/user";
import { isLoggedInVar } from "../cache";

interface Props {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
}

export const AccountPopover: FC<Props> = (props) => {
  const { t } = useTranslation();
  const { anchorEl, onClose, open, ...other } = props;
  const { data } = useQuery(ME);

  const navigate = useNavigate();

  const user =
    !data || !data.me
      ? {
          email: "unknown@test.de",
        }
      : data.me;

  const handleLogout = async () => {
    try {
      onClose?.();
      Cookies.remove(AUTH_TOKEN);
      isLoggedInVar(false);
      // await client.resetStore();
      await client.clearStore();
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Unable to logout.");
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}
    >
      <Box
        sx={{
          alignItems: "center",
          p: 2,
          display: "flex",
        }}
      >
        <Avatar
          sx={{
            height: 40,
            width: 40,
          }}
        >
          <AccountCircleIcon fontSize="small" />
        </Avatar>
        <Box
          sx={{
            ml: 1,
          }}
        >
          <Typography variant="body1">{user.email}</Typography>
          <Typography color="textSecondary" variant="body2">
            Lensation GmbH
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <RouterLink to="/dashboard/social/profile">
          <MenuItem component="a">
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">{t("_profile")}</Typography>}
            />
          </MenuItem>
        </RouterLink>
        <RouterLink to="/dashboard/account">
          <MenuItem component="a">
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">{t("_settings")}</Typography>
              }
            />
          </MenuItem>
        </RouterLink>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">{t("_logout")}</Typography>}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
};
