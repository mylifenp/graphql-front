import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { Spectrum } from "../../interfaces/sensor";
import { GET_SPECTRUMS } from "../../operations/queries/sensors";

interface Props {
  spectrum: Spectrum[];
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: Spectrum[] | null) => void;
}

const SpectrumChooser: FC<Props> = ({ spectrum, autoselectChange }) => {
  const { data } = useQuery(GET_SPECTRUMS);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.spectrums}
      sx={{ width: 300 }}
      value={spectrum}
      filterSelectedOptions
      onChange={autoselectChange("spectrum")}
      getOptionLabel={(option: Spectrum) => option.name}
      renderInput={(params) => <TextField {...params} label={t("_spectrum")} />}
    />
  );
};

export default SpectrumChooser;
