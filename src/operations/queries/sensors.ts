import { gql } from "@apollo/client";
import { SUPPLIER_FRAGMENTS, SENSOR_FRAGMENTS } from "../fragments";

export const GET_SENSORS = gql`
  query sensors {
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
  query suppliers {
    suppliers {
      ...supplier_info
      ...sensor
    }
  }
  ${SUPPLIER_FRAGMENTS}
`;

export const GET_STATES = gql`
  query states {
    states {
      id
      name
    }
  }
`;

export const GET_GLASS_LID_TYPES = gql`
  query glassLidTypes {
    glassLidTypes {
      id
      name
    }
  }
`;

export const GET_SPECTRUMS = gql`
  query spectrums {
    spectrums {
      id
      name
    }
  }
`;

export const GET_SHUTTER_TYPES = gql`
  query shutterTypes {
    shutterTypes {
      id
      name
    }
  }
`;

export const GET_SENSOR_TYPES = gql`
  query sensorTypes {
    sensorTypes {
      id
      name
    }
  }
`;
