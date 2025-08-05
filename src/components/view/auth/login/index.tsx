import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PassToggle from "@/components/reusable/pass-toggle";
import { loginSchema } from "@/schemas";
import { Facebook, Github, Loader2, Mail } from "lucide-react";
import { delay, setLocalStroage } from "@/lib/utils";
import { authKey } from "@/constant";
import { useUserLoginMutation } from "@/components/redux/features/auth/authApi";
import { useAppDispatch } from "@/components/redux/hooks";
import { responseApiErrors, ShowToast } from "@/components/helpers";
import { decodedToken } from "@/components/helpers/axios/generate-token";
import { setUser } from "@/components/redux/features/auth/authSlice";

// Create a type from the schema
type FormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    const res = await userLogin(values).unwrap();
    if (!res?.success) responseApiErrors(res, form);
    const token = res?.accessToken;
    const userInfo = token && decodedToken(token);
    if (token) {
      dispatch(setUser({ user: userInfo, token: token }));
      ShowToast({
        type: "success",
        title: "Login Successful",
        description: "You have successfully logged in",
      });
      setLocalStroage(authKey, token);
      await delay(3000);
      if (userInfo?.role === "admin") {
        navigate("/dashboard/analytics");
      } else {
        navigate("/");
      }
      form.reset();
    }
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none bg-card md:bg-transparent">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <CardTitle className="text-2xl font-bold text-primary">
            Login
          </CardTitle>
        </div>
        <CardDescription className="text-center text-muted-foreground ">
          Sign in to access your cycling account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      type="email"
                      autoComplete="email"
                      className="bg-gray-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input
                        placeholder={`${showPass ? "Password" : "*******"}`}
                        type={`${showPass ? "text" : "password"}`}
                        autoComplete="current-password"
                        className="bg-gray-50"
                        {...field}
                      />
                      <PassToggle
                        showPass={showPass}
                        setShowPass={setShowPass}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm  text-muted-foreground"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to={"/auth/forgot-password"}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      <div>
        <div className="border-b pb-2">
          {/* Divider */}
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm font-medium text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Perfect Circular Social Buttons */}
          <div className="flex justify-center space-x-3">
            {/* GitHub */}
            <button
              type="button"
              className="group cursor-pointer flex items-center justify-center w-8 h-8  rounded-full bg-white border-2 border-gray-200 shadow-sm transition-all duration-300"
            >
              <Github className="w-5 h-5 p-[2px] text-gray-600 transition-colors group-hover:text-gray-900" />
              <span className="sr-only">Continue with GitHub</span>
            </button>

            {/* Google */}
            <button
              type="button"
              className="group cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm transition-all duration-300"
            >
              <Mail className="w-5 h-5 p-[2px] text-gray-600 transition-colors group-hover:text-red-500" />
              <span className="sr-only">Continue with Google</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="group cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm transition-all duration-300"
            >
              <Facebook className="w-5 h-5 p-[2px] text-gray-600 transition-colors group-hover:text-[#1877F2]" />
              <span className="sr-only">Continue with Facebook</span>
            </button>
          </div>
        </div>
        <div className="flex pt-0 flex-col space-y-2 mt-2">
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to={"/auth/sign-up"}
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <span>Secure login</span>
            <span className="mx-2">•</span>
            <span>Privacy protected</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
