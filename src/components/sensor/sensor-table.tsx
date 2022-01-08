import { ChangeEventHandler, FC, useState, useEffect, MouseEvent } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Fuse from "fuse.js";
import { useQuery } from "@apollo/client";
import { GET_SENSORS } from "../../operations/queries/sensors";
import Loading from "../utilities/Loading";
import { Box, Menu, MenuItem, TextField, Theme } from "@mui/material";
import AddSensor from "./add-sensor";
import { GetSensorsQuery, Sensor } from "../../generated/graphql";
import { useTranslation } from "react-i18next";
import EditSensor from "./edit-sensor";

interface Props {}

const columns: GridColDef[] = [
  {
    width: 130,
    field: "id",
    hide: true,
  },
  {
    width: 130,
    field: "state",
    valueGetter: (params: GridValueGetterParams) => params.row.state.name,
  },
  {
    width: 130,
    field: "supplier",
    valueGetter: (params: GridValueGetterParams) => params.row.supplier.name,
  },
  {
    width: 130,
    field: "sensor_type",
    valueGetter: (params: GridValueGetterParams) => params.row.sensor_type.name,
  },
  {
    width: 130,
    field: "sensor_model",
  },
  { width: 130, field: "entry_year" },
  { width: 130, field: "end_of_life" },
  { width: 130, field: "mega_pixel" },
  { width: 130, field: "x_resolution" },
  { width: 130, field: "y_resolution" },
  {
    width: 130,
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
  { width: 130, field: "optical_area_x" },
  { width: 130, field: "optical_area_y" },
  { width: 170, field: "exact_optical_area_diagonal" },
  { width: 130, field: "next_optical_class" },
  { width: 130, field: "aspect_ratio" },
  { width: 130, field: "housing_x" },
  { width: 130, field: "housing_y" },
  { width: 130, field: "optical_center_x" },
  { width: 130, field: "optical_center_y" },
  { width: 130, field: "center_shift_x" },
  { width: 130, field: "center_shift_y" },
  { width: 130, field: "housing_glass" },
  { width: 130, field: "glass_lid_thickness" },
  { width: 130, field: "focal_plane_from_bottom" },
  { width: 130, field: "glass_index" },
  { width: 130, field: "pixel_lens_cra" },
  { width: 130, field: "alternative_designation" },
  { width: 130, field: "other_info" },
];

const options = {
  keys: ["sensor_model", "supplier.name"],
  threshold: 0.0,
  minMatchCharLength: 1,
  ignoreLocation: true,
};

const SensorTable: FC<Props> = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [position, setPostion] = useState({ top: 200, left: 400 });
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);
  const open = Boolean(anchorEl);

  const { data, loading, error } = useQuery<GetSensorsQuery>(GET_SENSORS);

  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Sensor[]>([]);

  useEffect(() => {
    if (!data) return;
    setResults(data.sensors as Sensor[]);
  }, [data]);

  const handleClick = (
    params: GridRowParams,
    event: MouseEvent<HTMLElement>
  ) => {
    setSelectedSensor(() => {
      if (!params.row) return null;
      const { clientX, clientY } = event;
      setPostion({ top: clientY, left: clientX });
      setAnchorEl(event.currentTarget);
      return params.row as Sensor;
    });
  };

  const handleClose = () => {
    setSelectedSensor(null);
    setAnchorEl(null);
  };

  const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const search = event.target.value;
    if (!data) return;
    let { sensors } = data;
    if (!sensors || !sensors.length) return;
    const fuse = new Fuse(sensors, options);
    setSearch(() => {
      if (!search) {
        setResults(data.sensors as Sensor[]);
        return "";
      }
      setResults(() => fuse.search(search).map((res) => res.item) as Sensor[]);
      return search;
    });
  };

  if (loading) return <Loading />;
  if (error) return <>error occured</>;

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          variant="outlined"
          value={search}
          onChange={handleFilter}
          placeholder={t("_search")}
        />
        <AddSensor />
      </Box>
      <div
        style={{
          width: "100%",
          padding: "5px",
        }}
      >
        <DataGrid
          sx={{
            height: "100%",
            minHeight: "83vh",
            "& .MuiDataGrid-cell--textCenter": {},
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: 16,
              color: (theme: Theme) => theme.palette.text.secondary,
            },
            "& .MuiDataGrid-row": {
              "&:nth-of-typ(2n)": {
                backgroundColor: (theme: Theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(235, 235, 235, .9)"
                    : "rgba(235, 235, 235, .1)",
              },
            },
            color: (theme: Theme) => theme.palette.text.primary,
            fontSize: 14,
            "& div": {
              lineHeight: "59px !important",
            },
          }}
          rows={results}
          columns={columns}
          rowHeight={80}
          pageSize={pageSize}
          density="compact"
          onRowClick={handleClick}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 50, 100]}
          disableSelectionOnClick
        />
      </div>
      <Menu
        id="basic-menu"
        anchorReference="anchorPosition"
        anchorEl={anchorEl}
        open={open}
        anchorPosition={position}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          {selectedSensor && (
            <EditSensor sensor={selectedSensor} onClose={handleClose} />
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default SensorTable;
