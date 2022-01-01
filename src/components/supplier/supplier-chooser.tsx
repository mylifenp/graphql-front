import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { Supplier } from "../../interfaces/supplier";
import { GET_SUPPLIERS } from "../../operations/queries/sensors";

interface Props {
  supplier: Supplier | null;
  autoselectChange: (
    name: string
  ) => (event: SyntheticEvent, value: Supplier | null) => void;
}

const SupplierChooser: FC<Props> = ({ supplier, autoselectChange }) => {
  const { data } = useQuery(GET_SUPPLIERS);
  const { t } = useTranslation();

  return (
    <Autocomplete
      options={!data ? [] : data.suppliers}
      sx={{ width: 300 }}
      value={supplier}
      filterSelectedOptions
      onChange={autoselectChange("supplier")}
      getOptionLabel={(option: Supplier) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_suppliers")} />
      )}
    />
  );
};

export default SupplierChooser;
