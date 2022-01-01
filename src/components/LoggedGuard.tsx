import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IS_LOGGED_IN } from "../operations/queries/authentication";

interface Props {}

const LoggedGuard: FC<Props> = ({ children }) => {
  const location = useLocation();
  const { data } = useQuery(IS_LOGGED_IN);
  console.log("data in loggedGuard", data);

  const [requestedLocation, setRequestedLocation] = useState<null | string>(
    null
  );

  if (data.isLoggedIn) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <Navigate to="/dashboard/profile" />;
  }

  // // This is done so that in case the route changes by any chance through other
  // // means between the moment of request and the render we navigate to the initially
  // // requested route.
  // if (requestedLocation && location.pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

  return <>{children}</>;
};

export default LoggedGuard;
