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
// import { ArrowRight, CheckCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

// Define the form schema with zod
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

// Create a type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function ForgotPassword() {
  // Initialize form with TypeScript types
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none bg-card md:bg-transparent">
      <>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <CardTitle className="text-2xl font-bold text-primary">
              Forgot Password
            </CardTitle>
          </div>
          <CardDescription className="text-center text-gray-700 dark:text-muted-foreground">
            Enter your email to receive a password reset link
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

              <Button type="submit" className="w-full">
                {/* {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )} */}
                Send Reset Link
              </Button>
            </form>
          </Form>
        </CardContent>
      </>
      {/* My Success this project in the projects */}
      {/* <>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-primary text-center">
            Check Your Email
          </CardTitle>
          <CardDescription className="text-center text-gray-700 dark:text-muted-foreground">
            Reset link sent successfully
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-3 py-4">
            <p className="text-gray-700 dark:text-gray-300">
              We've sent a password reset link to:
            </p>
            <p className="font-medium text-primary">Julfiker755.bd@gmail.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Please check your inbox and follow the instructions in the email
              to reset your password. The link will expire in 10 minutes.
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <Button variant="outline" className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Send Link Again
            </Button>

            <Button variant="default" className="w-full" asChild>
              <Link to="/auth/login">
                Back to Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </> */}

      <CardFooter className="flex flex-col space-y-2 border-t pt-6">
        <p className="text-sm text-center text-gray-700 dark:text-muted-foreground">
          Remembered your password?{" "}
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
