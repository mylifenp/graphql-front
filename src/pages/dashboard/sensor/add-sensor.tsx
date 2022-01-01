import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { initialSensorInput } from "../../../components/sensor/constants";
import GlassLidTypeChooser from "../../../components/sensor/glass-lid-type-chooses";
import SensorTypeChooser from "../../../components/sensor/sensor-type-chooser";
import ShutterTypeChooser from "../../../components/sensor/shutter-type-chooser";
import SpectrumChooser from "../../../components/sensor/spectrum-chooser";
import StateChooser from "../../../components/sensor/state-chooser";
import SupplierChooser from "../../../components/supplier/supplier-chooser";
import { Sensor } from "../../../interfaces/sensor";
import { SENSOR_INPUT } from "../../../operations/mutations/sensors";

const AddSensors = () => {
  const { t } = useTranslation();
  const [addSensor, { loading, error }] = useMutation(SENSOR_INPUT);
  const [sensor, setSensor] = useState<Sensor>({ ...initialSensorInput });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSensor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAutoselectChange =
    (name: string) =>
    <SyntheticEvent, T>(event: SyntheticEvent, value: T) => {
      if (!value || !name) return;
      console.log("name, value", name, value);
      setSensor((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  const handleSave: MouseEventHandler = (event) => {
    event.preventDefault();
    if (!sensor) return;
    const {
      supplier,
      sensor_type,
      state,
      pixel_lens_cra,
      focal_plane_from_bottom,
      glass_lid_thickness,
      housing_glass,
      optical_center_y,
      optical_center_x,
      housing_x,
      housing_y,
      entry_year,
      end_of_life,
      x_resolution,
      y_resolution,
      pixel_size,
    } = sensor;
    if (!supplier) return;
    const { id } = supplier;
    if (!id) return;
    const spectrum = sensor.spectrum.map((item) => item.id);
    const shutter_type = sensor.shutter_type.map((item) => item.id);
    const glass_lid_type = sensor.glass_lid_type.map((item) => item.id);

    const variables = {
      ...sensor,
      supplier: id,
      glass_lid_type,
      spectrum,
      shutter_type,
      sensor_type: !sensor_type ? null : sensor_type.id,
      state: !state ? null : state.id,
      pixel_lens_cra: parseFloat(pixel_lens_cra),
      focal_plane_from_bottom: parseFloat(focal_plane_from_bottom),
      glass_lid_thickness: parseFloat(glass_lid_thickness),
      housing_glass: parseFloat(housing_glass),
      optical_center_y: parseFloat(optical_center_y),
      optical_center_x: parseFloat(optical_center_x),
      housing_x: parseFloat(housing_x),
      housing_y: parseFloat(housing_y),
      entry_year: parseInt(entry_year, 10),
      end_of_life: parseInt(end_of_life, 10),
      x_resolution: parseInt(x_resolution, 10),
      y_resolution: parseInt(y_resolution, 10),
      pixel_size: parseFloat(pixel_size),
    };

    addSensor({ variables });
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <>
      <TextField
        value={sensor.sensor_model}
        label={t("_sensor_model")}
        name="sensor_model"
        onChange={handleChange}
      />
      <SupplierChooser
        supplier={sensor.supplier}
        autoselectChange={handleAutoselectChange}
      />
      <GlassLidTypeChooser
        glass_lid_type={sensor.glass_lid_type}
        autoselectChange={handleAutoselectChange}
      />
      <SpectrumChooser
        spectrum={sensor.spectrum}
        autoselectChange={handleAutoselectChange}
      />
      <ShutterTypeChooser
        shutter_type={sensor.shutter_type}
        autoselectChange={handleAutoselectChange}
      />
      <SensorTypeChooser
        sensor_type={sensor.sensor_type}
        autoselectChange={handleAutoselectChange}
      />
      <StateChooser
        state={sensor.state}
        autoselectChange={handleAutoselectChange}
      />
      <TextField
        value={sensor.other_info}
        label={t("_other_info")}
        name="other_info"
        onChange={handleChange}
      />
      <TextField
        value={sensor.alternative_designation}
        label={t("_alternative_designation")}
        name="alternative_designation"
        onChange={handleChange}
      />
      <TextField
        value={sensor.glass_index}
        label={t("_glass_index")}
        name="glass_index"
        onChange={handleChange}
      />
      <TextField
        value={sensor.pixel_lens_cra}
        label={t("_pixel_lens_cra")}
        name="pixel_lens_cra"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.optical_center_y}
        label={t("_optical_center_y")}
        name="optical_center_y"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.optical_center_x}
        label={t("_optical_center_x")}
        name="optical_center_x"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.housing_glass}
        label={t("_housing_glass")}
        name="housing_glass"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.glass_lid_thickness}
        label={t("_glass_lid_thickness")}
        name="glass_lid_thickness"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.focal_plane_from_bottom}
        label={t("_focal_plane_from_bottom")}
        name="focal_plane_from_bottom"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.housing_x}
        label={t("_housing_x")}
        name="housing_x"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.housing_y}
        label={t("_housing_y")}
        name="housing_y"
        type="number"
        onChange={handleChange}
      />

      <TextField
        value={sensor.entry_year}
        label={t("_entry_year")}
        name="entry_year"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.end_of_life}
        label={t("_end_of_life")}
        name="end_of_life"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.x_resolution}
        label={t("_x_resolution")}
        name="x_resolution"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.y_resolution}
        label={t("_y_resolution")}
        name="y_resolution"
        type="number"
        onChange={handleChange}
      />
      <TextField
        value={sensor.pixel_size}
        label={t("_pixel_size")}
        name="pixel_size"
        type="number"
        onChange={handleChange}
      />
      <Button onClick={handleSave}>save</Button>
    </>
  );
};

export default AddSensors;
