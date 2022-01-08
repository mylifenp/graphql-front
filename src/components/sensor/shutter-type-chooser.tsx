import { FC } from "react";
import { useQuery } from "@apollo/client";
import { Autocomplete, TextField, Tooltip, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField {...params} label={t("_shutter_type")} size="small" />
          <Tooltip title={`${t("_shutter_type_helper_text")}`}>
            <InfoIcon fontSize="small" color="warning" />
          </Tooltip>
        </Box>
      )}
    />
  );
};

export default ShutterTypeChooser;
