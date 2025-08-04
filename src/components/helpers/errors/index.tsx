export const responseApiErrors = (res: any, form: any) => {
  if (!res?.success && res?.errors) {
    res.errors.forEach((err: any) => {
      form.setError(err.path, {
        type: "manual",
        message: err.message || "Invalid value",
      });
    });
  }
};
