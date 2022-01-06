import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  GetSensorTypesQuery,
  InputMaybe,
  SensorType,
} from "../../generated/graphql";
import { GET_SENSOR_TYPES } from "../../operations/queries/sensors";

interface Props {
  sensor_type: InputMaybe<string> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const SensorTypeChooser: FC<Props> = ({ sensor_type, handleChange }) => {
  const { data } = useQuery<GetSensorTypesQuery>(GET_SENSOR_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      options={!data ? [] : data.sensorTypes}
      sx={{ width: 300, mr: 1, ml: 1 }}
      filterSelectedOptions
      value={
        data?.sensorTypes.filter((item) => item.id === sensor_type)[0] ||
        undefined
      }
      onChange={(event, value) => handleChange("sensor_type", value?.id)}
      getOptionLabel={(option: SensorType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_sensor_type")} size="small" />
      )}
    />
  );
};

export default SensorTypeChooser;
