import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  GetShutterTypesQuery,
  InputMaybe,
  ShutterType,
} from "../../generated/graphql";
import { GET_SHUTTER_TYPES } from "../../operations/queries/sensors";

interface Props {
  shutter_type: InputMaybe<InputMaybe<string>[]> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const ShutterTypeChooser: FC<Props> = ({ shutter_type, handleChange }) => {
  const { data } = useQuery<GetShutterTypesQuery>(GET_SHUTTER_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.shutterTypes}
      sx={{ width: 300, mr: 1, ml: 1 }}
      filterSelectedOptions
      value={data?.shutterTypes.filter((item) =>
        shutter_type?.includes(item.id)
      )}
      onChange={(event, value) =>
        handleChange(
          "shutter_type",
          value.map((val) => val.id)
        )
      }
      getOptionLabel={(option: ShutterType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_shutter_type")} size="small" />
      )}
    />
  );
};

export default ShutterTypeChooser;
