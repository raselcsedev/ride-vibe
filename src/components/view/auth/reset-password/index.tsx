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
import { Link } from "react-router-dom";
import { passwordValidation } from "@/schemas/password-validation";
import { useState } from "react";
import PassShowingToggler from "@/components/pass-showing-toggler";

const formSchema = z
  .object({
    newPassword: passwordValidation,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function ResetPassword() {
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none bg-card md:bg-transparent">
      <>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <CardTitle className="text-2xl font-bold text-primary">
              Reset Password
            </CardTitle>
          </div>
          <CardDescription className="text-center text-gray-700 dark:text-muted-foreground">
            Create a new password for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          placeholder={`${
                            showNewPass ? "New Password" : "*******"
                          }`}
                          type={`${showNewPass ? "text" : "password"}`}
                          autoComplete="new-password"
                          className="bg-gray-50"
                          {...field}
                        />
                        <PassShowingToggler
                          showPass={showNewPass}
                          setShowPass={setShowNewPass}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Password must be at least 8 characters with uppercase,
                      lowercase, number and special character.
                    </p>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          placeholder={`${
                            showConfirmPass ? "Confirm Password" : "*******"
                          }`}
                          type={`${showConfirmPass ? "text" : "password"}`}
                          autoComplete="new-password"
                          className="bg-gray-50"
                          {...field}
                        />
                        <PassShowingToggler
                          showPass={showConfirmPass}
                          setShowPass={setShowConfirmPass}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </>
      <CardFooter className="flex flex-col space-y-2 border-t pt-6">
        <p className="text-sm text-center text-gray-700 dark:text-muted-foreground">
          Remember your password?{" "}
          <Link
            to={"/auth/login"}
            className="text-primary font-medium hover:underline"
          >
            Back to login
          </Link>
        </p>
        <div className="flex items-center justify-center text-xs text-gray-700 dark:text-muted-foreground">
          <span>Secure reset</span>
          <span className="mx-2">•</span>
          <span>Privacy protected</span>
        </div>
      </CardFooter>
    </Card>
  );
}
