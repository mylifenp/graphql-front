import { Box, Divider, TextField, Tooltip } from "@mui/material";
import { FC, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Sensor } from "../../generated/graphql";
// import SupplierChooser from "../supplier/supplier-chooser";
// import SensorTypeChooser from "./sensor-type-chooser";
// import StateChooser from "./state-chooser";
import { useTranslation } from "react-i18next";
// import ShutterTypeChooser from "./shutter-type-chooser";

interface Props {
  currentSensor: Sensor;
}

const SensorForm: FC<Props> = ({ currentSensor }) => {
  const [sensor, setSensor] = useState(currentSensor);
  const { t } = useTranslation();

  const handleChange = <T,>(name: string, value: T) => {
    setSensor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 1,
          p: 1,
        }}
      >
        <StateChooser state={sensor.state?.name} handleChange={handleChange} />
      </Box>
      <Divider /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 1,
          p: 1,
        }}
      >
        {/* <SupplierChooser
          supplier={sensor.supplier?.name}
          handleChange={handleChange}
        />
        <SensorTypeChooser
          sensor_type={sensor.sensor_type?.name}
          handleChange={handleChange}
        /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: 300, mr: 1, ml: 1 }}
            size="small"
            value={sensor.sensor_model}
            label={t("_sensor_model")}
            name="sensor_model"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <Tooltip title={`${t("_sensor_model_helper_text")}`}>
            <InfoIcon fontSize="small" color="warning" />
          </Tooltip>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 1,
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          <Tooltip title={`${t("_entry_year_helper_text")}`}>
            <InfoIcon fontSize="small" color="warning" />
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: 300, mr: 1, ml: 1 }}
            value={sensor.end_of_life}
            size="small"
            label={t("_end_of_life")}
            name="end_of_life"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <Tooltip title={`${t("_end_of_life_helper_text")}`}>
            <InfoIcon fontSize="small" color="warning" />
          </Tooltip>
        </Box>
        {/* <ShutterTypeChooser
          shutter_type={sensor.shutter_type?.map((item) => item?.name)}
          handleChange={handleChange}
        /> 
      </Box> */}
      <Divider />
    </>
  );
};

export default SensorForm;
