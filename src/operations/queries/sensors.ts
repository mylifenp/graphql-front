import { gql } from "@apollo/client";
import { SUPPLIER_FRAGMENTS, SENSOR_FRAGMENTS } from "../fragments";

export const GET_SENSORS = gql`
  query GetSensors {
    sensors {
      id
      ...details
      ...supply_time
      ...derived_info
      ...supplierFragment
    }
  }
  ${SENSOR_FRAGMENTS}
`;

export const GET_SUPPLIERS = gql`
  query GetSuppliers {
    suppliers {
      id
      ...supplier_info
      ...sensor
    }
  }
  ${SUPPLIER_FRAGMENTS}
`;

export const GET_STATES = gql`
  query GetStates {
    states {
      id
      name
    }
  }
`;

export const GET_GLASS_LID_TYPES = gql`
  query GetGlassLidTypes {
    glassLidTypes {
      id
      name
    }
  }
`;

export const GET_SPECTRUMS = gql`
  query GetSpectrums {
    spectrums {
      id
      name
    }
  }
`;

export const GET_SHUTTER_TYPES = gql`
  query GetShutterTypes {
    shutterTypes {
      id
      name
    }
  }
`;

export const GET_SENSOR_TYPES = gql`
  query GetSensorTypes {
    sensorTypes {
      id
      name
    }
  }
`;
