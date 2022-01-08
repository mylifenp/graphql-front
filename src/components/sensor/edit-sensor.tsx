import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sensor } from "../../generated/graphql";
import SensorForm from "./sensor-form";

interface Props {
  sensor: Sensor;
  onClose: () => void;
}

const EditSensor: FC<Props> = ({ sensor, onClose }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(() => {
      onClose();
      return false;
    });
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>edit</MenuItem>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle id="alert-dialog-title">{sensor.sensor_model}</DialogTitle>
        <DialogContent>
          <SensorForm currentSensor={sensor} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("_cancel")}</Button>
          <Button onClick={handleClose} autoFocus>
            {t("_save")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditSensor;
