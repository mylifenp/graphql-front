// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
} from "@mui/material";
import { FC, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SensorInput,
  AddSensorMutation,
  GetSensorsQuery,
} from "../../generated/graphql";
import { SENSOR_INPUT } from "../../operations/mutations/sensors";
import { GET_SENSORS } from "../../operations/queries/sensors";
import SupplierChooser from "../supplier/supplier-chooser";
import { initialSensorInput } from "./constants";
import GlassLidTypeChooser from "./glass-lid-type-chooses";
import SensorTypeChooser from "./sensor-type-chooser";
import ShutterTypeChooser from "./shutter-type-chooser";
import SpectrumChooser from "./spectrum-chooser";
import StateChooser from "./state-chooser";

interface Props {}

const AddSensor: FC<Props> = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [sensor, setSensor] = useState<SensorInput>({
    ...initialSensorInput,
  });

  const [addSensor, { loading, error }] = useMutation<
    AddSensorMutation,
    SensorInput
  >(SENSOR_INPUT, {
    update(cache, { data }) {
      const new_sensor = data?.addSensor.sensor;
      const result = cache.readQuery<GetSensorsQuery>({
        query: GET_SENSORS,
      });
      if (!result || !result.sensors || !result.sensors.length) {
        return cache.writeQuery({
          query: GET_SENSORS,
          data: {
            sensors: [sensor],
          },
        });
      }
      cache.writeQuery({
        query: GET_SENSORS,
        data: {
          sensors: [...result.sensors, new_sensor],
        },
      });
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: MouseEventHandler = (event) => {
    event.preventDefault();
    if (!sensor) return;
    addSensor({
      variables: { ...sensor },
      onError: (err) => console.log("error"),
      onCompleted: () => {
        setOpen(() => {
          setSensor({ ...initialSensorInput });
          return false;
        });
      },
    });
  };

  const handleChange = <T,>(name: string, value: T) => {
    setSensor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {t("_add_sensor")}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>{t("_add_a_new_sensor")}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <StateChooser state={sensor.state} handleChange={handleChange} />
            <SupplierChooser
              supplier={sensor.supplier}
              handleChange={handleChange}
            />
            <SensorTypeChooser
              sensor_type={sensor.sensor_type}
              handleChange={handleChange}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              size="small"
              value={sensor.sensor_model}
              label={t("_sensor_model")}
              name="sensor_model"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.entry_year}
              size="small"
              label={t("_entry_year")}
              name="entry_year"
              type="number"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.end_of_life}
              size="small"
              label={t("_end_of_life")}
              name="end_of_life"
              type="number"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <ShutterTypeChooser
              shutter_type={sensor.shutter_type}
              handleChange={handleChange}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.pixel_lens_cra}
              label={t("_pixel_lens_cra")}
              name="pixel_lens_cra"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.x_resolution}
              label={t("_x_resolution")}
              name="x_resolution"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.y_resolution}
              label={t("_y_resolution")}
              name="y_resolution"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.pixel_size}
              label={t("_pixel_size")}
              name="pixel_size"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <SpectrumChooser
              spectrum={sensor.spectrum}
              handleChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.housing_x}
              label={t("_housing_x")}
              name="housing_x"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.housing_y}
              label={t("_housing_y")}
              name="housing_y"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.optical_center_y}
              label={t("_optical_center_y")}
              name="optical_center_y"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.optical_center_x}
              label={t("_optical_center_x")}
              name="optical_center_x"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.housing_glass}
              label={t("_housing_glass")}
              name="housing_glass"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.glass_lid_thickness}
              label={t("_glass_lid_thickness")}
              name="glass_lid_thickness"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.focal_plane_from_bottom}
              label={t("_focal_plane_from_bottom")}
              name="focal_plane_from_bottom"
              type="number"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              sx={{ width: 300, mr: 1, ml: 1 }}
              value={sensor.glass_index}
              label={t("_glass_index")}
              name="glass_index"
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <GlassLidTypeChooser
                glass_lid_type={sensor.glass_lid_type}
                handleChange={handleChange}
              />
              <TextField
                sx={{ width: 300, mr: 1, ml: 1 }}
                value={sensor.alternative_designation}
                label={t("_alternative_designation")}
                name="alternative_designation"
                size="small"
                fullWidth
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Box>
            <TextField
              value={sensor.other_info}
              label={t("_other_info")}
              name="other_info"
              size="small"
              fullWidth
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("_cancel")}</Button>
          <Button onClick={handleSave} autoFocus>
            {t("_save")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddSensor;
