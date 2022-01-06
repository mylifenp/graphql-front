import { useQuery } from "@apollo/client";
import { Box, Card } from "@mui/material";
import { FC } from "react";
import { User } from "../../generated/graphql";
import { GET_USERS } from "../../operations/queries/user";
import DataTable from "../table";

interface Props {}

const columns = [
  {
    name: "email",
    sortable: true,
    selector: (row: User) => row.email,
  },
  {
    name: "role",
    sortable: true,
    selector: (row: User) => row.role,
  },
];

const UserTable: FC<Props> = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <Card sx={{ m: 1 }}>
      <Box sx={{ m: 1, p: 1 }}>
        <DataTable columns={columns} data={data && data.users} />
      </Box>
    </Card>
  );
};

export default UserTable;
