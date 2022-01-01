import { gql } from "@apollo/client";

export const SUPPLIER_FRAGMENTS = gql`
  fragment supplier_info on Supplier {
    id
    name
    url
  }
  fragment sensor on Supplier {
    sensors {
      id
      updatedAt
    }
  }
`;

export const SENSOR_FRAGMENTS = gql`
  fragment supplierFragment on Sensor {
    supplier {
      id
      name
    }
  }
  fragment details on Sensor {
    sensor_model
    x_resolution
    y_resolution
    pixel_size
    housing_x
    housing_y
    optical_center_x
    optical_center_y
    housing_glass
    glass_lid_thickness
    focal_plane_from_bottom
    glass_index
    pixel_lens_cra
    alternative_designation
    other_info
  }
  fragment supply_time on Sensor {
    entry_year
    end_of_life
  }
  fragment derived_info on Sensor {
    mega_pixel
    optical_area_x
    optical_area_y
    optical_area_diagonal
    next_optical_class
    exact_optical_area_diagonal
    aspect_ratio
    center_shift_x
    center_shift_y
  }
`;
