import { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_SENSORS } from "../../operations/queries/sensors";
import Loading from "../utilities/Loading";


interface Props {}

const Sensor: FC<Props> = () => {
  const { data, loading, error } = useQuery(GET_SENSORS);

  if (loading) return <Loading />;
  if (error) return <>error occured</>;

  return <></>;
};

export default Sensor;
