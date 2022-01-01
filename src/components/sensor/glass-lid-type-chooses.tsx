import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { GlassLidType } from "../../interfaces/sensor";
import { GET_GLASS_LID_TYPES } from "../../operations/queries/sensors";

interface Props {
  glass_lid_type: GlassLidType[];
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: GlassLidType[] | null) => void;
}

const GlassLidTypeChooser: FC<Props> = ({
  glass_lid_type,
  autoselectChange,
}) => {
  const { data } = useQuery(GET_GLASS_LID_TYPES);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.glassLidTypes}
      sx={{ width: 300 }}
      value={glass_lid_type}
      onChange={autoselectChange("glass_lid_type")}
      getOptionLabel={(option: GlassLidType) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_glass_lid_type")} />
      )}
    />
  );
};

export default GlassLidTypeChooser;
