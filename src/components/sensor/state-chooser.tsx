import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GetStatesQuery, InputMaybe, State } from "../../generated/graphql";
import { GET_STATES } from "../../operations/queries/sensors";

interface Props {
  state: InputMaybe<string> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const StateChooser: FC<Props> = ({ state, handleChange }) => {
  const { loading, error, data } = useQuery<GetStatesQuery>(GET_STATES);
  const { t } = useTranslation();

  if (loading) return <>loading</>;
  if (error) return <>error</>;

  return (
    <Autocomplete
      options={!data ? [] : data?.states}
      sx={{ width: 300, mr: 1, ml: 1 }}
      defaultValue={
        data?.states.filter((item) => item.name === "Not yet Complete")[0] ||
        undefined
      }
      value={data?.states.filter((item) => item.id === state)[0] || undefined}
      filterSelectedOptions
      onChange={(event, value) => handleChange("state", value && value.id)}
      getOptionLabel={(option: State) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_state")} size="small" />
      )}
    />
  );
};

export default StateChooser;
