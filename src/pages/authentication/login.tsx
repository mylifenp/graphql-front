import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { Logo } from "../../components/logo";
import { LoginMain } from "../../components/authentication/login/LoginMain";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm" sx={{ py: "80px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8,
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40,
              }}
              variant={"light"}
            />
          </RouterLink>
        </Box>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 4,
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h4">
                  Log in
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <LoginMain />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Link
              color="textSecondary"
              component={RouterLink}
              to="/authentication/register"
              variant="body2"
            >
              Create new account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
