import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  GetGlassLidTypesQuery,
  GlassLidType,
  InputMaybe,
} from "../../generated/graphql";
import { GET_GLASS_LID_TYPES } from "../../operations/queries/sensors";

interface Props {
  glass_lid_type: InputMaybe<InputMaybe<string>[]> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const GlassLidTypeChooser: FC<Props> = ({ glass_lid_type, handleChange }) => {
  const { data } = useQuery<GetGlassLidTypesQuery>(GET_GLASS_LID_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.glassLidTypes}
      sx={{ width: 300, mr: 1, ml: 1 }}
      value={data?.glassLidTypes.filter((item) =>
        glass_lid_type?.includes(item.id)
      )}
      onChange={(event, value) =>
        handleChange(
          "glass_lid_type",
          value.map((val) => val.id)
        )
      }
      filterSelectedOptions
      getOptionLabel={(option: GlassLidType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_glass_lid_type")} size="small" />
      )}
    />
  );
};

export default GlassLidTypeChooser;
