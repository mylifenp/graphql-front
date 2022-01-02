import { useQuery } from "@apollo/client";
import { Box, Card } from "@mui/material";
import { FC } from "react";
// import { useTranslation } from "react-i18next";
import { Sensor } from "../../interfaces/sensor";
import { GET_SENSORS } from "../../operations/queries/sensors";
import DataTable from "../table";

interface Props {}

const columns = [
  {
    name: "Supplier",
    sortable: true,
    selector: (row: Sensor) => {
      const { supplier } = row;
      if (!supplier) return "";
      return supplier.name;
    },
  },
  {
    name: "Sensor Model",
    selector: (row: Sensor) => row.sensor_model || "",
    sortable: true,
  },
  {
    name: "Pixel Size",
    selector: (row: Sensor) => row.pixel_size || "",
    sortable: true,
  },
  {
    name: "End Of Life",
    selector: (row: Sensor) => row.end_of_life || "",
    sortable: true,
  },
  {
    name: "Aspect Ratio",
    selector: (row: Sensor) => row.aspect_ratio || "",
  },
];

// const data: Data[] = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//   },
//   {
//     id: 2,
//     title: "Ghostbusters",
//     year: "1984",
//   },
// ];

const SensorTable: FC<Props> = () => {
  // const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_SENSORS);

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <Card sx={{ m: 1 }}>
      <Box sx={{ m: 1, p: 1 }}>
        <DataTable columns={columns} data={data?.sensors} />
      </Box>
    </Card>
  );
};

export default SensorTable;
