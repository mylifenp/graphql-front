import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { IS_LOGGED_IN } from "../operations/queries/authentication";

interface Props {}

const GuestGuard: FC<Props> = ({ children }) => {
  const { data } = useQuery(IS_LOGGED_IN);
  if (data.isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return <>{children}</>;
};

export default GuestGuard;
