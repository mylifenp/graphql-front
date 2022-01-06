import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GetSuppliersQuery, InputMaybe } from "../../generated/graphql";
import { GET_SUPPLIERS } from "../../operations/queries/sensors";

interface Props {
  supplier: InputMaybe<string> | undefined;
  handleChange: <T>(name: string, value: T) => void;
}

const SupplierChooser: FC<Props> = ({ supplier, handleChange }) => {
  const { data } = useQuery<GetSuppliersQuery>(GET_SUPPLIERS);
  const { t } = useTranslation();

  return (
    <Autocomplete
      options={!data ? [] : data?.suppliers}
      sx={{ width: 300, mr: 1, ml: 1 }}
      filterSelectedOptions
      value={
        data?.suppliers.filter((item) => item.id === supplier)[0] || undefined
      }
      onChange={(event, value) => handleChange("supplier", value?.id)}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={t("_suppliers")} size="small" />
      )}
    />
  );
};

export default SupplierChooser;
