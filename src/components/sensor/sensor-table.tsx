import { FC, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { GET_SENSORS } from "../../operations/queries/sensors";
import Loading from "../utilities/Loading";
import { Box, TextField } from "@mui/material";
// import { Sensor } from "../../interfaces/sensor";
// import Fuse from "fuse.js";

interface Props {}

// const SensorFilter = (searchText: string, data: Sensor[]) => {
//   const options = {
//     keys: ["sensor_model"],
//     threshold: 0.0,
//     minMatchCharLength: searchText.length,
//     ignoreLocation: true,
//   };

//   const fuse = new Fuse(data, options);
//   let result = fuse.search(searchText);
//   return result.map((res) => res.item);
// };

const columns: GridColDef[] = [
  {
    field: "id",
    hide: true,
  },
  {
    field: "state",
    valueGetter: (params: GridValueGetterParams) => params.row.state.name,
  },
  {
    field: "supplier",
    valueGetter: (params: GridValueGetterParams) => params.row.supplier.name,
  },
  {
    field: "sensor_type",
    valueGetter: (params: GridValueGetterParams) => params.row.sensor_type.name,
  },
  {
    field: "sensor_model",
  },
  { field: "entry_year" },
  { field: "end_of_life" },
  { field: "mega_pixel" },
  { field: "x_resolution" },
  { field: "y_resolution" },
  {
    field: "pixel_size",
  },
  {
    field: "shutter_type",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.shutter_type.map((item: any) => item.name).join(", "),
    width: 180,
  },
  {
    field: "spectrum",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.spectrum.map((item: any) => item.name).join(", "),
    width: 180,
  },
  { field: "optical_area_x" },
  { field: "optical_area_y" },
  { field: "exact_optical_area_diagonal" },
  { field: "next_optical_class" },
  { field: "aspect_ratio" },
  { field: "housing_x" },
  { field: "housing_y" },
  { field: "optical_center_x" },
  { field: "optical_center_y" },
  { field: "center_shift_x" },
  { field: "center_shift_y" },
  { field: "housing_glass" },
  { field: "glass_lid_thickness" },
  { field: "focal_plane_from_bottom" },
  { field: "glass_index" },
  { field: "pixel_lens_cra" },
  { field: "alternative_designation" },
  { field: "other_info" },
];

const SensorTable: FC<Props> = () => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_SENSORS);

  // data({
  //   variables: {},
  //   onCompleted: ({ sensors }: any) => {
  //     console.log("sensors", sensors);
  //   },
  // });

  if (loading) return <Loading />;
  if (error) return <>error occured</>;

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Box sx={{ mt: 1, p: 1 }}>
        <TextField
          label={t("_search_text")}
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
      <DataGrid
        rows={data.sensors}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default SensorTable;