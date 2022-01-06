import { gql } from "@apollo/client";
import { SENSOR_FRAGMENTS } from "../fragments";

export const SUPPLIER_INPUT = gql`
  mutation AddSupplier($name: String!, $url: String) {
    addSupplier(input: { name: $name, url: $url }) {
      success
      supplier {
        id
        name
        url
      }
    }
  }
`;

export const SENSOR_INPUT = gql`
  mutation AddSensor(
    $sensor_model: String
    $supplier: ID
    $glass_lid_type: [ID]
    $spectrum: [ID]
    $shutter_type: [ID]
    $sensor_type: ID
    $state: ID
    $other_info: String
    $alternative_designation: String
    $pixel_lens_cra: Float
    $glass_index: String
    $focal_plane_from_bottom: Float
    $glass_lid_thickness: Float
    $housing_glass: Float
    $optical_center_y: Float
    $optical_center_x: Float
    $housing_x: Float
    $housing_y: Float
    $entry_year: Int
    $end_of_life: Int
    $x_resolution: Int
    $y_resolution: Int
    $pixel_size: Float
  ) {
    addSensor(
      input: {
        sensor_model: $sensor_model
        supplier: $supplier
        glass_lid_type: $glass_lid_type
        spectrum: $spectrum
        shutter_type: $shutter_type
        sensor_type: $sensor_type
        state: $state
        other_info: $other_info
        alternative_designation: $alternative_designation
        pixel_lens_cra: $pixel_lens_cra
        glass_index: $glass_index
        focal_plane_from_bottom: $focal_plane_from_bottom
        glass_lid_thickness: $glass_lid_thickness
        housing_glass: $housing_glass
        optical_center_y: $optical_center_y
        optical_center_x: $optical_center_x
        housing_x: $housing_x
        housing_y: $housing_y
        entry_year: $entry_year
        end_of_life: $end_of_life
        x_resolution: $x_resolution
        y_resolution: $y_resolution
        pixel_size: $pixel_size
      }
    ) {
      success
      sensor {
        id
        ...supplierFragment
        ...details
        ...supply_time
        ...derived_info
      }
    }
  }
  ${SENSOR_FRAGMENTS}
`;
