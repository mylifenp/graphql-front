import { Supplier } from "./supplier";

export interface GlassLidType {
  id: string;
  name: string;
}

export interface Spectrum {
  id: string;
  name: string;
}

export interface ShutterType {
  id: string;
  name: string;
}

export interface SensorType {
  id: string;
  name: string;
}

export interface State {
  id: string;
  name: string;
}

export interface Sensor {
  sensor_model: string;
  supplier: Supplier | null;
  glass_lid_type: GlassLidType[];
  spectrum: Spectrum[];
  shutter_type: ShutterType[];
  sensor_type: SensorType | null;
  state: State | null;
  other_info: string;
  alternative_designation: string;
  pixel_lens_cra: string;
  glass_index: string;
  focal_plane_from_bottom: string;
  glass_lid_thickness: string;
  housing_glass: string;
  optical_center_y: string;
  optical_center_x: string;
  housing_x: string;
  housing_y: string;
  entry_year: string;
  end_of_life: string;
  x_resolution: string;
  y_resolution: string;
  pixel_size: string;
  mega_pixel?: string;
  optical_area_x?: string;
  optical_area_y?: string;
  optical_area_diagonal?: string;
  next_optical_class?: string;
  exact_optical_area_diagonal?: string;
  aspect_ratio?: string;
  center_shift_x?: string;
  center_shift_y?: string;
}
