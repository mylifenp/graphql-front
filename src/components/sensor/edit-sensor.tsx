import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sensor } from "../../generated/graphql";

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
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">{sensor.sensor_model}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditSensor;
