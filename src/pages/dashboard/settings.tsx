import { Box } from "@mui/material";
import { FC } from "react";
import AddUser from "../../components/user/add-user";
import UserTable from "../../components/user/user-table";

interface Props {}

const Settings: FC<Props> = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <AddUser />
      </Box>
      <Box>
        <UserTable />
      </Box>
    </>
  );
};

export default Settings;
