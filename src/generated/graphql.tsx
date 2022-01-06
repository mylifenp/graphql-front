import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddGlassLidTypeResult = {
  __typename?: 'AddGlassLidTypeResult';
  glassLidType: GlassLidType;
  success: Scalars['Boolean'];
};

export type AddSensorResult = {
  __typename?: 'AddSensorResult';
  sensor: Sensor;
  success: Scalars['Boolean'];
};

export type AddSensorTypeResult = {
  __typename?: 'AddSensorTypeResult';
  sensorType: SensorType;
  success: Scalars['Boolean'];
};

export type AddShutterTypeResult = {
  __typename?: 'AddShutterTypeResult';
  shutterType: ShutterType;
  success: Scalars['Boolean'];
};

export type AddSpectrumResult = {
  __typename?: 'AddSpectrumResult';
  spectrum: Spectrum;
  success: Scalars['Boolean'];
};

export type AddStateResult = {
  __typename?: 'AddStateResult';
  state: State;
  success: Scalars['Boolean'];
};

export type AddSupplierResult = {
  __typename?: 'AddSupplierResult';
  success: Scalars['Boolean'];
  supplier: Supplier;
};

export type DeleteGlassLidTypeResult = {
  __typename?: 'DeleteGlassLidTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteSensorResult = {
  __typename?: 'DeleteSensorResult';
  success: Scalars['Boolean'];
};

export type DeleteSensorTypeResult = {
  __typename?: 'DeleteSensorTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteShutterTypeResult = {
  __typename?: 'DeleteShutterTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteSpectrumResult = {
  __typename?: 'DeleteSpectrumResult';
  success: Scalars['Boolean'];
};

export type DeleteStateResult = {
  __typename?: 'DeleteStateResult';
  success: Scalars['Boolean'];
};

export type DeleteSupplierResult = {
  __typename?: 'DeleteSupplierResult';
  status: Scalars['Boolean'];
};

export type DeleteUserResult = {
  __typename?: 'DeleteUserResult';
  status: Scalars['Boolean'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type GlassLidType = {
  __typename?: 'GlassLidType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GlassLidTypeInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addGlassLidType: AddGlassLidTypeResult;
  addSensor: AddSensorResult;
  addSensorType: AddSensorTypeResult;
  addShutterType: AddShutterTypeResult;
  addSpectrum: AddSpectrumResult;
  addState: AddStateResult;
  addSupplier: AddSupplierResult;
  deleteGlassLidType?: Maybe<DeleteGlassLidTypeResult>;
  deleteSensor: DeleteSensorResult;
  deleteSensorType?: Maybe<DeleteSensorTypeResult>;
  deleteShutterType?: Maybe<DeleteShutterTypeResult>;
  deleteSpectrum?: Maybe<DeleteSpectrumResult>;
  deleteState?: Maybe<DeleteStateResult>;
  deleteSupplier?: Maybe<DeleteSupplierResult>;
  deleteUser: DeleteUserResult;
  makeAdmin: User;
  makeModerator: User;
  signIn: Token;
  signUp: User;
  singleUpload: File;
  updateGlassLidType: UpdateGlassLidTypeResult;
  updateSensor: UpdateSensorResult;
  updateSensorType: UpdateSensorTypeResult;
  updateShutterType: UpdateShutterTypeResult;
  updateSpectrum: UpdateSpectrumResult;
  updateState: UpdateStateResult;
  updateSupplier: UpdateSupplierResult;
};


export type MutationAddGlassLidTypeArgs = {
  input?: InputMaybe<GlassLidTypeInput>;
};


export type MutationAddSensorArgs = {
  input: SensorInput;
};


export type MutationAddSensorTypeArgs = {
  input?: InputMaybe<SensorTypeInput>;
};


export type MutationAddShutterTypeArgs = {
  input?: InputMaybe<ShutterTypeInput>;
};


export type MutationAddSpectrumArgs = {
  input?: InputMaybe<SpectrumInput>;
};


export type MutationAddStateArgs = {
  input?: InputMaybe<StateInput>;
};


export type MutationAddSupplierArgs = {
  input?: InputMaybe<SupplierInput>;
};


export type MutationDeleteGlassLidTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSensorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSensorTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteShutterTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSpectrumArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationMakeAdminArgs = {
  id: Scalars['ID'];
};


export type MutationMakeModeratorArgs = {
  id: Scalars['ID'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  input: UserInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateGlassLidTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<GlassLidTypeInput>;
};


export type MutationUpdateSensorArgs = {
  id: Scalars['ID'];
  input: SensorInput;
};


export type MutationUpdateSensorTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SensorTypeInput>;
};


export type MutationUpdateShutterTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ShutterTypeInput>;
};


export type MutationUpdateSpectrumArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SpectrumInput>;
};


export type MutationUpdateStateArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<StateInput>;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SupplierInput>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  filterSensors?: Maybe<Array<Sensor>>;
  getFileUrl: UploadResult;
  glassLidType: GlassLidType;
  glassLidTypes: Array<GlassLidType>;
  me?: Maybe<User>;
  sensor: Sensor;
  sensorType: SensorType;
  sensorTypes: Array<SensorType>;
  sensors?: Maybe<Array<Sensor>>;
  shutterType: ShutterType;
  shutterTypes: Array<ShutterType>;
  spectrum: Spectrum;
  spectrums: Array<Spectrum>;
  state: State;
  states: Array<State>;
  supplier: Supplier;
  suppliers: Array<Supplier>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryFilterSensorsArgs = {
  input?: InputMaybe<SensorFilterInput>;
};


export type QueryGetFileUrlArgs = {
  id: Scalars['ID'];
};


export type QueryGlassLidTypeArgs = {
  id: Scalars['ID'];
};


export type QuerySensorArgs = {
  id: Scalars['ID'];
};


export type QuerySensorTypeArgs = {
  id: Scalars['ID'];
};


export type QueryShutterTypeArgs = {
  id: Scalars['ID'];
};


export type QuerySpectrumArgs = {
  id: Scalars['ID'];
};


export type QueryStateArgs = {
  id: Scalars['ID'];
};


export type QuerySupplierArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Sensor = {
  __typename?: 'Sensor';
  alternative_designation?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  center_shift_x?: Maybe<Scalars['Float']>;
  center_shift_y?: Maybe<Scalars['Float']>;
  end_of_life?: Maybe<Scalars['Int']>;
  entry_year?: Maybe<Scalars['Int']>;
  exact_optical_area_diagonal?: Maybe<Scalars['String']>;
  focal_plane_from_bottom?: Maybe<Scalars['Float']>;
  glass_index?: Maybe<Scalars['String']>;
  glass_lid_thickness?: Maybe<Scalars['Float']>;
  glass_lid_type?: Maybe<Array<Maybe<GlassLidType>>>;
  housing_glass?: Maybe<Scalars['Float']>;
  housing_x?: Maybe<Scalars['Float']>;
  housing_y?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  mega_pixel?: Maybe<Scalars['Float']>;
  next_optical_class?: Maybe<Scalars['Float']>;
  optical_area_diagonal?: Maybe<Scalars['Float']>;
  optical_area_x?: Maybe<Scalars['Float']>;
  optical_area_y?: Maybe<Scalars['Float']>;
  optical_center_x?: Maybe<Scalars['Float']>;
  optical_center_y?: Maybe<Scalars['Float']>;
  other_info?: Maybe<Scalars['String']>;
  pixel_lens_cra?: Maybe<Scalars['Float']>;
  pixel_size?: Maybe<Scalars['Float']>;
  sensor_model?: Maybe<Scalars['String']>;
  sensor_type?: Maybe<SensorType>;
  shutter_type?: Maybe<Array<Maybe<ShutterType>>>;
  spectrum?: Maybe<Array<Maybe<Spectrum>>>;
  state?: Maybe<State>;
  supplier?: Maybe<Supplier>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  x_resolution?: Maybe<Scalars['Int']>;
  y_resolution?: Maybe<Scalars['Int']>;
};

export type SensorFilterInput = {
  glass_index?: InputMaybe<Scalars['String']>;
  sensor_model?: InputMaybe<Scalars['String']>;
};

export type SensorInput = {
  alternative_designation?: InputMaybe<Scalars['String']>;
  end_of_life?: InputMaybe<Scalars['Int']>;
  entry_year?: InputMaybe<Scalars['Int']>;
  focal_plane_from_bottom?: InputMaybe<Scalars['Float']>;
  glass_index?: InputMaybe<Scalars['String']>;
  glass_lid_thickness?: InputMaybe<Scalars['Float']>;
  glass_lid_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  housing_glass?: InputMaybe<Scalars['Float']>;
  housing_x?: InputMaybe<Scalars['Float']>;
  housing_y?: InputMaybe<Scalars['Float']>;
  optical_center_x?: InputMaybe<Scalars['Float']>;
  optical_center_y?: InputMaybe<Scalars['Float']>;
  other_info?: InputMaybe<Scalars['String']>;
  pixel_lens_cra?: InputMaybe<Scalars['Float']>;
  pixel_size?: InputMaybe<Scalars['Float']>;
  sensor_model?: InputMaybe<Scalars['String']>;
  sensor_type?: InputMaybe<Scalars['ID']>;
  shutter_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  spectrum?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  state?: InputMaybe<Scalars['ID']>;
  supplier?: InputMaybe<Scalars['ID']>;
  x_resolution?: InputMaybe<Scalars['Int']>;
  y_resolution?: InputMaybe<Scalars['Int']>;
};

export type SensorType = {
  __typename?: 'SensorType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SensorTypeInput = {
  name: Scalars['String'];
};

export type ShutterType = {
  __typename?: 'ShutterType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ShutterTypeInput = {
  name: Scalars['String'];
};

export type Spectrum = {
  __typename?: 'Spectrum';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SpectrumInput = {
  name: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StateInput = {
  name: Scalars['String'];
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['ID'];
  name: Scalars['String'];
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  url?: Maybe<Scalars['String']>;
};

export type SupplierInput = {
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  expires: Scalars['String'];
  token: Scalars['String'];
};

export type UpdateGlassLidTypeResult = {
  __typename?: 'UpdateGlassLidTypeResult';
  glassLidType: GlassLidType;
  success: Scalars['Boolean'];
};

export type UpdateSensorResult = {
  __typename?: 'UpdateSensorResult';
  sensor?: Maybe<Sensor>;
  success: Scalars['Boolean'];
};

export type UpdateSensorTypeResult = {
  __typename?: 'UpdateSensorTypeResult';
  sensorType: SensorType;
  success: Scalars['Boolean'];
};

export type UpdateShutterTypeResult = {
  __typename?: 'UpdateShutterTypeResult';
  shutterType: ShutterType;
  success: Scalars['Boolean'];
};

export type UpdateSpectrumResult = {
  __typename?: 'UpdateSpectrumResult';
  spectrum: Spectrum;
  success: Scalars['Boolean'];
};

export type UpdateStateResult = {
  __typename?: 'UpdateStateResult';
  state: State;
  success: Scalars['Boolean'];
};

export type UpdateSupplierResult = {
  __typename?: 'UpdateSupplierResult';
  success: Scalars['Boolean'];
  supplier: Supplier;
};

export type UploadResult = {
  __typename?: 'UploadResult';
  thumbnail: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Supplier_InfoFragment = { __typename?: 'Supplier', name: string, url?: string | null | undefined };

export type SensorFragment = { __typename?: 'Supplier', sensors?: Array<{ __typename?: 'Sensor', id: string, updatedAt?: any | null | undefined } | null | undefined> | null | undefined };

export type Sensor_Type_InfoFragment = { __typename?: 'SensorType', id: string, name: string };

export type SupplierFragmentFragment = { __typename?: 'Sensor', supplier?: { __typename?: 'Supplier', id: string, name: string } | null | undefined };

export type DetailsFragment = { __typename?: 'Sensor', sensor_model?: string | null | undefined, x_resolution?: number | null | undefined, y_resolution?: number | null | undefined, pixel_size?: number | null | undefined, housing_x?: number | null | undefined, housing_y?: number | null | undefined, optical_center_x?: number | null | undefined, optical_center_y?: number | null | undefined, housing_glass?: number | null | undefined, glass_lid_thickness?: number | null | undefined, focal_plane_from_bottom?: number | null | undefined, glass_index?: string | null | undefined, pixel_lens_cra?: number | null | undefined, alternative_designation?: string | null | undefined, other_info?: string | null | undefined, sensor_type?: { __typename?: 'SensorType', id: string, name: string } | null | undefined, state?: { __typename?: 'State', id: string, name: string } | null | undefined, shutter_type?: Array<{ __typename?: 'ShutterType', id: string, name: string } | null | undefined> | null | undefined, spectrum?: Array<{ __typename?: 'Spectrum', id: string, name: string } | null | undefined> | null | undefined };

export type Supply_TimeFragment = { __typename?: 'Sensor', entry_year?: number | null | undefined, end_of_life?: number | null | undefined };

export type Derived_InfoFragment = { __typename?: 'Sensor', mega_pixel?: number | null | undefined, optical_area_x?: number | null | undefined, optical_area_y?: number | null | undefined, optical_area_diagonal?: number | null | undefined, next_optical_class?: number | null | undefined, exact_optical_area_diagonal?: string | null | undefined, aspect_ratio?: string | null | undefined, center_shift_x?: number | null | undefined, center_shift_y?: number | null | undefined };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Token', token: string, expires: string } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, email: string, role: string } };

export type AddSupplierMutationVariables = Exact<{
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
}>;


export type AddSupplierMutation = { __typename?: 'Mutation', addSupplier: { __typename?: 'AddSupplierResult', success: boolean, supplier: { __typename?: 'Supplier', id: string, name: string, url?: string | null | undefined } } };

export type AddSensorMutationVariables = Exact<{
  sensor_model?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['ID']>;
  glass_lid_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  spectrum?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  shutter_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  sensor_type?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<Scalars['ID']>;
  other_info?: InputMaybe<Scalars['String']>;
  alternative_designation?: InputMaybe<Scalars['String']>;
  pixel_lens_cra?: InputMaybe<Scalars['Float']>;
  glass_index?: InputMaybe<Scalars['String']>;
  focal_plane_from_bottom?: InputMaybe<Scalars['Float']>;
  glass_lid_thickness?: InputMaybe<Scalars['Float']>;
  housing_glass?: InputMaybe<Scalars['Float']>;
  optical_center_y?: InputMaybe<Scalars['Float']>;
  optical_center_x?: InputMaybe<Scalars['Float']>;
  housing_x?: InputMaybe<Scalars['Float']>;
  housing_y?: InputMaybe<Scalars['Float']>;
  entry_year?: InputMaybe<Scalars['Int']>;
  end_of_life?: InputMaybe<Scalars['Int']>;
  x_resolution?: InputMaybe<Scalars['Int']>;
  y_resolution?: InputMaybe<Scalars['Int']>;
  pixel_size?: InputMaybe<Scalars['Float']>;
}>;


export type AddSensorMutation = { __typename?: 'Mutation', addSensor: { __typename?: 'AddSensorResult', success: boolean, sensor: { __typename?: 'Sensor', sensor_model?: string | null | undefined, supplier?: { __typename?: 'Supplier', id: string, name: string, url?: string | null | undefined } | null | undefined } } };

export type GetSensorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSensorsQuery = { __typename?: 'Query', sensors?: Array<{ __typename?: 'Sensor', id: string, sensor_model?: string | null | undefined, x_resolution?: number | null | undefined, y_resolution?: number | null | undefined, pixel_size?: number | null | undefined, housing_x?: number | null | undefined, housing_y?: number | null | undefined, optical_center_x?: number | null | undefined, optical_center_y?: number | null | undefined, housing_glass?: number | null | undefined, glass_lid_thickness?: number | null | undefined, focal_plane_from_bottom?: number | null | undefined, glass_index?: string | null | undefined, pixel_lens_cra?: number | null | undefined, alternative_designation?: string | null | undefined, other_info?: string | null | undefined, entry_year?: number | null | undefined, end_of_life?: number | null | undefined, mega_pixel?: number | null | undefined, optical_area_x?: number | null | undefined, optical_area_y?: number | null | undefined, optical_area_diagonal?: number | null | undefined, next_optical_class?: number | null | undefined, exact_optical_area_diagonal?: string | null | undefined, aspect_ratio?: string | null | undefined, center_shift_x?: number | null | undefined, center_shift_y?: number | null | undefined, sensor_type?: { __typename?: 'SensorType', id: string, name: string } | null | undefined, state?: { __typename?: 'State', id: string, name: string } | null | undefined, shutter_type?: Array<{ __typename?: 'ShutterType', id: string, name: string } | null | undefined> | null | undefined, spectrum?: Array<{ __typename?: 'Spectrum', id: string, name: string } | null | undefined> | null | undefined, supplier?: { __typename?: 'Supplier', id: string, name: string } | null | undefined }> | null | undefined };

export type GetSuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSuppliersQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', id: string, name: string, url?: string | null | undefined, sensors?: Array<{ __typename?: 'Sensor', id: string, updatedAt?: any | null | undefined } | null | undefined> | null | undefined }> };

export type GetStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatesQuery = { __typename?: 'Query', states: Array<{ __typename?: 'State', id: string, name: string }> };

export type GetGlassLidTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlassLidTypesQuery = { __typename?: 'Query', glassLidTypes: Array<{ __typename?: 'GlassLidType', id: string, name: string }> };

export type GetSpectrumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpectrumsQuery = { __typename?: 'Query', spectrums: Array<{ __typename?: 'Spectrum', id: string, name: string }> };

export type GetShutterTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShutterTypesQuery = { __typename?: 'Query', shutterTypes: Array<{ __typename?: 'ShutterType', id: string, name: string }> };

export type GetSensorTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSensorTypesQuery = { __typename?: 'Query', sensorTypes: Array<{ __typename?: 'SensorType', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string } | null | undefined };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, email: string, role: string }> | null | undefined };

export type SuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type SuppliersQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', id: string, name: string, url?: string | null | undefined }> };

export const Supplier_InfoFragmentDoc = gql`
    fragment supplier_info on Supplier {
  name
  url
}
    `;
export const SensorFragmentDoc = gql`
    fragment sensor on Supplier {
  sensors {
    id
    updatedAt
  }
}
    `;
export const Sensor_Type_InfoFragmentDoc = gql`
    fragment sensor_type_info on SensorType {
  id
  name
}
    `;
export const SupplierFragmentFragmentDoc = gql`
    fragment supplierFragment on Sensor {
  supplier {
    id
    name
  }
}
    `;
export const DetailsFragmentDoc = gql`
    fragment details on Sensor {
  sensor_model
  sensor_type {
    id
    name
  }
  state {
    id
    name
  }
  shutter_type {
    id
    name
  }
  spectrum {
    id
    name
  }
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
    `;
export const Supply_TimeFragmentDoc = gql`
    fragment supply_time on Sensor {
  entry_year
  end_of_life
}
    `;
export const Derived_InfoFragmentDoc = gql`
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
export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
    expires
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($email: String!, $password: String!) {
  signUp(input: {email: $email, password: $password}) {
    id
    email
    role
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const AddSupplierDocument = gql`
    mutation AddSupplier($name: String!, $url: String) {
  addSupplier(input: {name: $name, url: $url}) {
    success
    supplier {
      id
      name
      url
    }
  }
}
    `;
export type AddSupplierMutationFn = Apollo.MutationFunction<AddSupplierMutation, AddSupplierMutationVariables>;

/**
 * __useAddSupplierMutation__
 *
 * To run a mutation, you first call `useAddSupplierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSupplierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSupplierMutation, { data, loading, error }] = useAddSupplierMutation({
 *   variables: {
 *      name: // value for 'name'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddSupplierMutation(baseOptions?: Apollo.MutationHookOptions<AddSupplierMutation, AddSupplierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSupplierMutation, AddSupplierMutationVariables>(AddSupplierDocument, options);
      }
export type AddSupplierMutationHookResult = ReturnType<typeof useAddSupplierMutation>;
export type AddSupplierMutationResult = Apollo.MutationResult<AddSupplierMutation>;
export type AddSupplierMutationOptions = Apollo.BaseMutationOptions<AddSupplierMutation, AddSupplierMutationVariables>;
export const AddSensorDocument = gql`
    mutation AddSensor($sensor_model: String, $supplier: ID, $glass_lid_type: [ID], $spectrum: [ID], $shutter_type: [ID], $sensor_type: ID, $state: ID, $other_info: String, $alternative_designation: String, $pixel_lens_cra: Float, $glass_index: String, $focal_plane_from_bottom: Float, $glass_lid_thickness: Float, $housing_glass: Float, $optical_center_y: Float, $optical_center_x: Float, $housing_x: Float, $housing_y: Float, $entry_year: Int, $end_of_life: Int, $x_resolution: Int, $y_resolution: Int, $pixel_size: Float) {
  addSensor(
    input: {sensor_model: $sensor_model, supplier: $supplier, glass_lid_type: $glass_lid_type, spectrum: $spectrum, shutter_type: $shutter_type, sensor_type: $sensor_type, state: $state, other_info: $other_info, alternative_designation: $alternative_designation, pixel_lens_cra: $pixel_lens_cra, glass_index: $glass_index, focal_plane_from_bottom: $focal_plane_from_bottom, glass_lid_thickness: $glass_lid_thickness, housing_glass: $housing_glass, optical_center_y: $optical_center_y, optical_center_x: $optical_center_x, housing_x: $housing_x, housing_y: $housing_y, entry_year: $entry_year, end_of_life: $end_of_life, x_resolution: $x_resolution, y_resolution: $y_resolution, pixel_size: $pixel_size}
  ) {
    success
    sensor {
      sensor_model
      supplier {
        id
        name
        url
      }
    }
  }
}
    `;
export type AddSensorMutationFn = Apollo.MutationFunction<AddSensorMutation, AddSensorMutationVariables>;

/**
 * __useAddSensorMutation__
 *
 * To run a mutation, you first call `useAddSensorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSensorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSensorMutation, { data, loading, error }] = useAddSensorMutation({
 *   variables: {
 *      sensor_model: // value for 'sensor_model'
 *      supplier: // value for 'supplier'
 *      glass_lid_type: // value for 'glass_lid_type'
 *      spectrum: // value for 'spectrum'
 *      shutter_type: // value for 'shutter_type'
 *      sensor_type: // value for 'sensor_type'
 *      state: // value for 'state'
 *      other_info: // value for 'other_info'
 *      alternative_designation: // value for 'alternative_designation'
 *      pixel_lens_cra: // value for 'pixel_lens_cra'
 *      glass_index: // value for 'glass_index'
 *      focal_plane_from_bottom: // value for 'focal_plane_from_bottom'
 *      glass_lid_thickness: // value for 'glass_lid_thickness'
 *      housing_glass: // value for 'housing_glass'
 *      optical_center_y: // value for 'optical_center_y'
 *      optical_center_x: // value for 'optical_center_x'
 *      housing_x: // value for 'housing_x'
 *      housing_y: // value for 'housing_y'
 *      entry_year: // value for 'entry_year'
 *      end_of_life: // value for 'end_of_life'
 *      x_resolution: // value for 'x_resolution'
 *      y_resolution: // value for 'y_resolution'
 *      pixel_size: // value for 'pixel_size'
 *   },
 * });
 */
export function useAddSensorMutation(baseOptions?: Apollo.MutationHookOptions<AddSensorMutation, AddSensorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSensorMutation, AddSensorMutationVariables>(AddSensorDocument, options);
      }
export type AddSensorMutationHookResult = ReturnType<typeof useAddSensorMutation>;
export type AddSensorMutationResult = Apollo.MutationResult<AddSensorMutation>;
export type AddSensorMutationOptions = Apollo.BaseMutationOptions<AddSensorMutation, AddSensorMutationVariables>;
export const GetSensorsDocument = gql`
    query GetSensors {
  sensors {
    id
    ...details
    ...supply_time
    ...derived_info
    ...supplierFragment
  }
}
    ${DetailsFragmentDoc}
${Supply_TimeFragmentDoc}
${Derived_InfoFragmentDoc}
${SupplierFragmentFragmentDoc}`;

/**
 * __useGetSensorsQuery__
 *
 * To run a query within a React component, call `useGetSensorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSensorsQuery(baseOptions?: Apollo.QueryHookOptions<GetSensorsQuery, GetSensorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSensorsQuery, GetSensorsQueryVariables>(GetSensorsDocument, options);
      }
export function useGetSensorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSensorsQuery, GetSensorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSensorsQuery, GetSensorsQueryVariables>(GetSensorsDocument, options);
        }
export type GetSensorsQueryHookResult = ReturnType<typeof useGetSensorsQuery>;
export type GetSensorsLazyQueryHookResult = ReturnType<typeof useGetSensorsLazyQuery>;
export type GetSensorsQueryResult = Apollo.QueryResult<GetSensorsQuery, GetSensorsQueryVariables>;
export const GetSuppliersDocument = gql`
    query GetSuppliers {
  suppliers {
    id
    ...supplier_info
    ...sensor
  }
}
    ${Supplier_InfoFragmentDoc}
${SensorFragmentDoc}`;

/**
 * __useGetSuppliersQuery__
 *
 * To run a query within a React component, call `useGetSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSuppliersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSuppliersQuery(baseOptions?: Apollo.QueryHookOptions<GetSuppliersQuery, GetSuppliersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSuppliersQuery, GetSuppliersQueryVariables>(GetSuppliersDocument, options);
      }
export function useGetSuppliersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSuppliersQuery, GetSuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSuppliersQuery, GetSuppliersQueryVariables>(GetSuppliersDocument, options);
        }
export type GetSuppliersQueryHookResult = ReturnType<typeof useGetSuppliersQuery>;
export type GetSuppliersLazyQueryHookResult = ReturnType<typeof useGetSuppliersLazyQuery>;
export type GetSuppliersQueryResult = Apollo.QueryResult<GetSuppliersQuery, GetSuppliersQueryVariables>;
export const GetStatesDocument = gql`
    query GetStates {
  states {
    id
    name
  }
}
    `;

/**
 * __useGetStatesQuery__
 *
 * To run a query within a React component, call `useGetStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatesQuery(baseOptions?: Apollo.QueryHookOptions<GetStatesQuery, GetStatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatesQuery, GetStatesQueryVariables>(GetStatesDocument, options);
      }
export function useGetStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatesQuery, GetStatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatesQuery, GetStatesQueryVariables>(GetStatesDocument, options);
        }
export type GetStatesQueryHookResult = ReturnType<typeof useGetStatesQuery>;
export type GetStatesLazyQueryHookResult = ReturnType<typeof useGetStatesLazyQuery>;
export type GetStatesQueryResult = Apollo.QueryResult<GetStatesQuery, GetStatesQueryVariables>;
export const GetGlassLidTypesDocument = gql`
    query GetGlassLidTypes {
  glassLidTypes {
    id
    name
  }
}
    `;

/**
 * __useGetGlassLidTypesQuery__
 *
 * To run a query within a React component, call `useGetGlassLidTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGlassLidTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGlassLidTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGlassLidTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetGlassLidTypesQuery, GetGlassLidTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGlassLidTypesQuery, GetGlassLidTypesQueryVariables>(GetGlassLidTypesDocument, options);
      }
export function useGetGlassLidTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGlassLidTypesQuery, GetGlassLidTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGlassLidTypesQuery, GetGlassLidTypesQueryVariables>(GetGlassLidTypesDocument, options);
        }
export type GetGlassLidTypesQueryHookResult = ReturnType<typeof useGetGlassLidTypesQuery>;
export type GetGlassLidTypesLazyQueryHookResult = ReturnType<typeof useGetGlassLidTypesLazyQuery>;
export type GetGlassLidTypesQueryResult = Apollo.QueryResult<GetGlassLidTypesQuery, GetGlassLidTypesQueryVariables>;
export const GetSpectrumsDocument = gql`
    query GetSpectrums {
  spectrums {
    id
    name
  }
}
    `;

/**
 * __useGetSpectrumsQuery__
 *
 * To run a query within a React component, call `useGetSpectrumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpectrumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpectrumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpectrumsQuery(baseOptions?: Apollo.QueryHookOptions<GetSpectrumsQuery, GetSpectrumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpectrumsQuery, GetSpectrumsQueryVariables>(GetSpectrumsDocument, options);
      }
export function useGetSpectrumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpectrumsQuery, GetSpectrumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpectrumsQuery, GetSpectrumsQueryVariables>(GetSpectrumsDocument, options);
        }
export type GetSpectrumsQueryHookResult = ReturnType<typeof useGetSpectrumsQuery>;
export type GetSpectrumsLazyQueryHookResult = ReturnType<typeof useGetSpectrumsLazyQuery>;
export type GetSpectrumsQueryResult = Apollo.QueryResult<GetSpectrumsQuery, GetSpectrumsQueryVariables>;
export const GetShutterTypesDocument = gql`
    query GetShutterTypes {
  shutterTypes {
    id
    name
  }
}
    `;

/**
 * __useGetShutterTypesQuery__
 *
 * To run a query within a React component, call `useGetShutterTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShutterTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShutterTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShutterTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetShutterTypesQuery, GetShutterTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShutterTypesQuery, GetShutterTypesQueryVariables>(GetShutterTypesDocument, options);
      }
export function useGetShutterTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShutterTypesQuery, GetShutterTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShutterTypesQuery, GetShutterTypesQueryVariables>(GetShutterTypesDocument, options);
        }
export type GetShutterTypesQueryHookResult = ReturnType<typeof useGetShutterTypesQuery>;
export type GetShutterTypesLazyQueryHookResult = ReturnType<typeof useGetShutterTypesLazyQuery>;
export type GetShutterTypesQueryResult = Apollo.QueryResult<GetShutterTypesQuery, GetShutterTypesQueryVariables>;
export const GetSensorTypesDocument = gql`
    query GetSensorTypes {
  sensorTypes {
    id
    name
  }
}
    `;

/**
 * __useGetSensorTypesQuery__
 *
 * To run a query within a React component, call `useGetSensorTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSensorTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetSensorTypesQuery, GetSensorTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSensorTypesQuery, GetSensorTypesQueryVariables>(GetSensorTypesDocument, options);
      }
export function useGetSensorTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSensorTypesQuery, GetSensorTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSensorTypesQuery, GetSensorTypesQueryVariables>(GetSensorTypesDocument, options);
        }
export type GetSensorTypesQueryHookResult = ReturnType<typeof useGetSensorTypesQuery>;
export type GetSensorTypesLazyQueryHookResult = ReturnType<typeof useGetSensorTypesLazyQuery>;
export type GetSensorTypesQueryResult = Apollo.QueryResult<GetSensorTypesQuery, GetSensorTypesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    role
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const SuppliersDocument = gql`
    query suppliers {
  suppliers {
    id
    name
    url
  }
}
    `;

/**
 * __useSuppliersQuery__
 *
 * To run a query within a React component, call `useSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuppliersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSuppliersQuery(baseOptions?: Apollo.QueryHookOptions<SuppliersQuery, SuppliersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuppliersQuery, SuppliersQueryVariables>(SuppliersDocument, options);
      }
export function useSuppliersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuppliersQuery, SuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuppliersQuery, SuppliersQueryVariables>(SuppliersDocument, options);
        }
export type SuppliersQueryHookResult = ReturnType<typeof useSuppliersQuery>;
export type SuppliersLazyQueryHookResult = ReturnType<typeof useSuppliersLazyQuery>;
export type SuppliersQueryResult = Apollo.QueryResult<SuppliersQuery, SuppliersQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    