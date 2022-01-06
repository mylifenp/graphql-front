import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../../operations/mutations/authentication";
import { GET_USERS } from "../../operations/queries/user";
import {
  GetUsersQuery,
  SignUpMutation,
  UserInput,
} from "../../generated/graphql";

interface Props {}

const AddUser: FC<Props> = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<UserInput | null>(null);

  const [signUp, { loading, error }] = useMutation<SignUpMutation, UserInput>(
    SIGNUP_MUTATION,
    {
      update(cache, { data }) {
        const new_user = data?.signUp;
        const existingUsers = cache.readQuery<GetUsersQuery>({
          query: GET_USERS,
        });
        if (
          !existingUsers ||
          !existingUsers.users ||
          !existingUsers.users.length
        ) {
          cache.writeQuery({
            query: GET_USERS,
            data: {
              users: [new_user],
            },
          });
          return;
        }
        cache.writeQuery({
          query: GET_USERS,
          data: {
            users: [...existingUsers.users, new_user],
          },
        });
      },
    }
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClickOpen: MouseEventHandler = (event) => {
    event.preventDefault();
    setUser({ email: "", password: "" });
  };

  const handleClose: MouseEventHandler = (event) => {
    event.preventDefault();
    setUser(null);
  };

  const handleSave: MouseEventHandler = (event) => {
    event.preventDefault();
    if (!user) return;
    const { email, password } = user;
    signUp({
      variables: { email, password },
      onError: (error) => console.log("error", error),
      onCompleted: ({ signUp }) => {
        setUser(null);
      },
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {t("_add_user")}
      </Button>
      {user && (
        <Dialog open={!!user} onClose={handleClose} fullWidth>
          <form>
            <DialogTitle>{t("_add_new_user")}</DialogTitle>
            {loading && <p>"Submitting..."</p>}
            {error && <p>error</p>}
            <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                name="email"
                sx={{ m: 1 }}
                value={user.email}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                name="password"
                sx={{ m: 1 }}
                value={user.password}
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>{t("_cancel")}</Button>
              <Button onClick={handleSave} autoFocus>
                {t("_save")}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </div>
  );
};

export default AddUser;
