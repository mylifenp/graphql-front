import { FC, useEffect, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "../logo";

interface Props {
  onClose: () => void;
  open: boolean;
}

// const getSections = (t) => [
//   {
//     title: t("General"),
//     items: [
//       {
//         title: t("Overview"),
//         path: "/dashboard",
//         icon: <HomeIcon fontSize="small" />,
//       },
//       {
//         title: t("Analytics"),
//         path: "/dashboard/analytics",
//         icon: <ChartBarIcon fontSize="small" />,
//       },
//       {
//         title: t("Finance"),
//         path: "/dashboard/finance",
//         icon: <ChartPieIcon fontSize="small" />,
//       },
//       {
//         title: t("Logistics"),
//         path: "/dashboard/logistics",
//         icon: <TruckIcon fontSize="small" />,
//         chip: (
//           <Chip
//             color="secondary"
//             label={
//               <Typography
//                 sx={{
//                   fontSize: "10px",
//                   fontWeight: "600",
//                 }}
//               >
//                 NEW
//               </Typography>
//             }
//             size="small"
//           />
//         ),
//       },
//       {
//         title: t("Account"),
//         path: "/dashboard/account",
//         icon: <UserCircleIcon fontSize="small" />,
//       },
//     ],
//   },
//   {
//     title: t("Management"),
//     items: [
//       {
//         title: t("Customers"),
//         path: "/dashboard/customers",
//         icon: <UsersIcon fontSize="small" />,
//         children: [
//           {
//             title: t("List"),
//             path: "/dashboard/customers",
//           },
//           {
//             title: t("Details"),
//             path: "/dashboard/customers/1",
//           },
//           {
//             title: t("Edit"),
//             path: "/dashboard/customers/1/edit",
//           },
//         ],
//       },
//       {
//         title: t("Products"),
//         path: "/dashboard/products",
//         icon: <ShoppingBagIcon fontSize="small" />,
//         children: [
//           {
//             title: t("List"),
//             path: "/dashboard/products",
//           },
//           {
//             title: t("Create"),
//             path: "/dashboard/products/new",
//           },
//         ],
//       },
//       {
//         title: t("Orders"),
//         icon: <ShoppingCartIcon fontSize="small" />,
//         path: "/dashboard/orders",
//         children: [
//           {
//             title: t("List"),
//             path: "/dashboard/orders",
//           },
//           {
//             title: t("Details"),
//             path: "/dashboard/orders/1",
//           },
//         ],
//       },
//       {
//         title: t("Invoices"),
//         path: "/dashboard/invoices",
//         icon: <ReceiptTaxIcon fontSize="small" />,
//         children: [
//           {
//             title: t("List"),
//             path: "/dashboard/invoices",
//           },
//           {
//             title: t("Details"),
//             path: "/dashboard/invoices/1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: t("Platforms"),
//     items: [
//       {
//         title: t("Job Listings"),
//         path: "/dashboard/jobs",
//         icon: <OfficeBuildingIcon fontSize="small" />,
//         children: [
//           {
//             title: t("Browse"),
//             path: "/dashboard/jobs",
//           },
//           {
//             title: t("Details"),
//             path: "/dashboard/jobs/companies/1",
//           },
//           {
//             title: t("Create"),
//             path: "/dashboard/jobs/new",
//           },
//         ],
//       },
//       {
//         title: t("Social Media"),
//         path: "/dashboard/social",
//         icon: <ShareIcon fontSize="small" />,
//         children: [
//           {
//             title: t("Profile"),
//             path: "/dashboard/social/profile",
//           },
//           {
//             title: t("Feed"),
//             path: "/dashboard/social/feed",
//           },
//         ],
//       },
//       {
//         title: t("Blog"),
//         path: "/blog",
//         icon: <NewspaperIcon fontSize="small" />,
//         children: [
//           {
//             title: t("Post List"),
//             path: "/blog",
//           },
//           {
//             title: t("Post Details"),
//             path: "/blog/1",
//           },
//           {
//             title: t("Post Create"),
//             path: "/blog/new",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: t("Apps"),
//     items: [
//       {
//         title: t("Kanban"),
//         path: "/dashboard/kanban",
//         icon: <ClipboardListIcon fontSize="small" />,
//       },
//       {
//         title: t("Mail"),
//         path: "/dashboard/mail",
//         icon: <MailIcon fontSize="small" />,
//       },
//       {
//         title: t("Chat"),
//         path: "/dashboard/chat",
//         icon: <ChatAlt2Icon fontSize="small" />,
//       },
//       {
//         title: t("Calendar"),
//         path: "/dashboard/calendar",
//         icon: <CalendarIcon fontSize="small" />,
//       },
//     ],
//   },
//   {
//     title: t("Pages"),
//     items: [
//       {
//         title: t("Auth"),
//         path: "/authentication",
//         icon: <LockClosedIcon fontSize="small" />,
//         children: [
//           {
//             title: t("Register"),
//             path: "/authentication/register?disableGuard=true",
//           },
//           {
//             title: t("Login"),
//             path: "/authentication/login?disableGuard=true",
//           },
//         ],
//       },
//       {
//         title: t("Pricing"),
//         path: "/dashboard/pricing",
//         icon: <CreditCardIcon fontSize="small" />,
//       },
//       {
//         title: t("Checkout"),
//         path: "/checkout",
//         icon: <CashIcon fontSize="small" />,
//       },
//       {
//         title: t("Contact"),
//         path: "/contact",
//         icon: <MailOpenIcon fontSize="small" />,
//       },
//       {
//         title: t("Error"),
//         path: "/error",
//         icon: <XCircleIcon fontSize="small" />,
//         children: [
//           {
//             title: "401",
//             path: "/401",
//           },
//           {
//             title: "404",
//             path: "/404",
//           },
//           {
//             title: "500",
//             path: "/500",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const DashboardSidebar: FC<Props> = (props) => {
  const { onClose, open } = props;
  const location = useLocation();
  // const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });
  // const sections = useMemo(() => getSections(t), [t]);
  const organizationsRef = useRef(null);
  // const [openOrganizationsPopover, setOpenOrganizationsPopover] =
  //   useState(false);

  const handlePathChange = () => {
    if (!location) {
      return;
    }
    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  // const handleOpenOrganizationsPopover = () => {
  //   setOpenOrganizationsPopover(true);
  // };

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <RouterLink to="/">
              <Button>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                  variant={"light"}
                />
              </Button>
            </RouterLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              // onClick={handleOpenOrganizationsPopover}
              ref={organizationsRef}
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Lensation GmbH
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {/* {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={location.pathname}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))} */}
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748", // dark divider
          }}
        />
        {/* <Box sx={{ p: 2 }}>
          <Typography color="neutral.100" variant="subtitle2">
            {t("Need Help?")}
          </Typography>
          <Typography color="neutral.500" variant="body2">
            {t("Check our docs")}
          </Typography>
          <RouterLink to="/docs/welcome">
            <Button
              color="secondary"
              component="a"
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              {t("Documentation")}
            </Button>
          </RouterLink>
        </Box> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
