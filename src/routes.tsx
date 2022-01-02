import { FC } from "react";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./components/main-layout";
import DashboardLayout from "./components/dashboard/dashboard-layout";
import AuthGuard from "./components/AuthGuard";

interface Props {}

const Loadable = (Component: FC) => (props: Props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
// Authentication Pages
const LoginPage = Loadable(lazy(() => import("./pages/authentication/login")));
const RegisterPage = Loadable(
  lazy(() => import("./pages/authentication/register"))
);

// Dashboard pages
const Dashboard = Loadable(lazy(() => import("./pages/dashboard/dashboard")));
const LensesPage = Loadable(lazy(() => import("./pages/dashboard/lenses")));
const Sensors = Loadable(
  lazy(() => import("./pages/dashboard/sensor/sensors"))
);
const AddSensors = Loadable(
  lazy(() => import("./pages/dashboard/sensor/add-sensor"))
);
const Settings = Loadable(lazy(() => import("./pages/dashboard/settings")));
// Other pages
const Home = Loadable(lazy(() => import("./pages/home")));

const routes = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "lenses",
        element: <LensesPage />,
      },
      { path: "sensors", element: <Sensors /> },
      { path: "add-sensor", element: <AddSensors /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
