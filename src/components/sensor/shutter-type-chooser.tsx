import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { ShutterType } from "../../interfaces/sensor";
import { GET_SHUTTER_TYPES } from "../../operations/queries/sensors";

interface Props {
  shutter_type: ShutterType[];
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: ShutterType[] | null) => void;
}

const ShutterTypeChooser: FC<Props> = ({ shutter_type, autoselectChange }) => {
  const { data } = useQuery(GET_SHUTTER_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.shutterTypes}
      sx={{ width: 300 }}
      filterSelectedOptions
      value={shutter_type}
      onChange={autoselectChange("shutter_type")}
      getOptionLabel={(option: ShutterType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_shutter_type")} />
      )}
    />
  );
};

export default ShutterTypeChooser;
