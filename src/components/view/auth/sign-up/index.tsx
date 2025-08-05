import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { signUpSchema } from "@/schemas";
import { delay } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useSignUpCustomerMutation } from "@/components/redux/features/auth/authApi";
import { responseApiErrors, ShowToast } from "@/components/helpers";

type FormValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [signUpCustomer, { isLoading }] = useSignUpCustomerMutation();
  const form = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contactNumber: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    const res = await signUpCustomer(values).unwrap();
    if (!res?.success) responseApiErrors(res, form);
    if (res._id) {
      ShowToast({
        type: "success",
        title: "Sign Up Successful",
        description: "You have successfully Sign Up",
      });
      await delay(3000);
      navigate("/auth/login");
      form.reset();
    }
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none bg-card md:bg-transparent">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <CardTitle className="text-2xl font-bold text-primary">
            Sign Up
          </CardTitle>
        </div>
        <CardDescription className="text-center text-gray-700 dark:text-muted-foreground">
          Create your cycling account today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      type="text"
                      autoComplete="name"
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
                        autoComplete="new-password"
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

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (123) 456-7890"
                      type="tel"
                      autoComplete="tel"
                      className="bg-gray-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 border-t pt-6">
        <p className="text-sm text-center text-gray-700 dark:text-muted-foreground">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="flex items-center justify-center text-xs text-gray-700 dark:text-muted-foreground">
          <span>Secure signup</span>
          <span className="mx-2">•</span>
          <span>Privacy protected</span>
        </div>
      </CardFooter>
    </Card>
  );
}
