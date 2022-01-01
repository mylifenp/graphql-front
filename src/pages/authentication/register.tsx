import { useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import { SIGNUP_MUTATION } from "../../operations/mutations/authentication";
import { AUTH_TOKEN } from "../../utils/config";
import { isLoggedInVar } from "../../cache";

interface Props {}

const Register: FC<Props> = () => {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // const hydrateMe = () => {
  //   me({
  //     variables: {},
  //     onCompleted: ({ id, email }) => {
  //       loggedUser({ id, email });
  //     },
  //   });
  // };

  const handleLogin: MouseEventHandler = (event) => {
    event.preventDefault();
    signup({
      variables: { ...formState },
      onCompleted: ({ signUp }) => {
        console.log("login", signUp);
        const { token, expires } = signUp;
        const _expires = !expires
          ? new Date(new Date().getTime() + 60 * 60 * 1000)
          : new Date(new Date().getTime() + parseInt(expires, 10) * 1000);
        Cookies.set(AUTH_TOKEN, token, { expires: _expires });
        isLoggedInVar(true);
        // hydrateMe();
      },
    });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <Box>
      <TextField
        value={formState.email}
        name="email"
        onChange={handleChange}
        label="email"
      />
      <TextField
        value={formState.password}
        type={"password"}
        name="password"
        onChange={handleChange}
        label="password"
      />
      <Button onClick={handleLogin}>Signup</Button>
    </Box>
  );
};

export default Register;
