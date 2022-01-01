import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { SensorType } from "../../interfaces/sensor";
import { GET_SENSOR_TYPES } from "../../operations/queries/sensors";

interface Props {
  sensor_type: SensorType | null;
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: SensorType | null) => void;
}

const SensorTypeChooser: FC<Props> = ({ sensor_type, autoselectChange }) => {
  const { data } = useQuery(GET_SENSOR_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      options={!data ? [] : data.sensorTypes}
      sx={{ width: 300 }}
      filterSelectedOptions
      value={sensor_type}
      onChange={autoselectChange("sensor_type")}
      getOptionLabel={(option: SensorType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_sensor_type")} />
      )}
    />
  );
};

export default SensorTypeChooser;
