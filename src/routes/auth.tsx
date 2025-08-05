
import AuthLayout from "@/components/layout/auth";
import ForgotPassword from "@/components/view/auth/forgot-password";
import Login from "@/components/view/auth/login";
import ResetPassword from "@/components/view/auth/reset-password";
import SignUp from "@/components/view/auth/sign-up";

const authRoutes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];

export default authRoutes;
