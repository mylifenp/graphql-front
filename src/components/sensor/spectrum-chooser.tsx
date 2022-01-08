import { useQuery } from "@apollo/client";
import { Autocomplete, TextField, Tooltip, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  GetSpectrumsQuery,
  InputMaybe,
  Spectrum,
} from "../../generated/graphql";
import { GET_SPECTRUMS } from "../../operations/queries/sensors";

interface Props {
  spectrum: InputMaybe<InputMaybe<string>[]> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const SpectrumChooser: FC<Props> = ({ spectrum, handleChange }) => {
  const { data } = useQuery<GetSpectrumsQuery>(GET_SPECTRUMS);
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple={true}
      options={!data ? [] : data.spectrums}
      sx={{ width: 300, mr: 1, ml: 1 }}
      value={data?.spectrums.filter((item) => spectrum?.includes(item.id))}
      filterSelectedOptions
      onChange={(event, value) =>
        handleChange(
          "spectrum",
          value.map((val) => val.id)
        )
      }
      getOptionLabel={(option: Spectrum) => option.name}
      renderInput={(params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField {...params} label={t("_spectrum")} size="small" />
          <Tooltip title={`${t("_spectrum_helper_text")}`}>
            <InfoIcon fontSize="small" color="warning" />
          </Tooltip>
        </Box>
      )}
    />
  );
};

export default SpectrumChooser;
