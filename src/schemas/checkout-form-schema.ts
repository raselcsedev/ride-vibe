import { paymentMethod } from "@/constant/order.const";
import { z } from "zod";

export const checkoutFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    contact: z.string().min(10, { message: "Contact number must be at least 10 characters" }),
    address: z.string().min(10, { message: "Address must be at least 10 characters" }),
    paymentMethod: z.enum(paymentMethod,{required_error: 'Please select a payment method'}),
});
