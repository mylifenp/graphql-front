import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { State } from "../../interfaces/sensor";
import { GET_STATES } from "../../operations/queries/sensors";

interface Props {
  state: State | null;
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: State | null) => void;
}

const StateChooser: FC<Props> = ({ state, autoselectChange }) => {
  const { data } = useQuery(GET_STATES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      options={!data ? [] : data.states}
      sx={{ width: 300 }}
      value={state}
      filterSelectedOptions
      onChange={autoselectChange("state")}
      getOptionLabel={(option: State) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_state")} />
      )}
    />
  );
};

export default StateChooser;
