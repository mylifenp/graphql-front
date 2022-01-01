import { FC } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {}

const sortIcon = <ArrowDropDownIcon />;
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

const TableBase = <T,>(props: TableProps<T>) => {
  return (
    <DataTable
      pagination
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
};

export default TableBase;
