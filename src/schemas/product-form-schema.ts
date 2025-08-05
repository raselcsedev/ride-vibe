import { productCategories, productFrameMaterial } from "@/constant/product.const";
import { z } from "zod";

export const productFormSchema = z.object({
    name: z.string().min(1, "Bicycle name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.coerce.number().min(0.01, "Price must be greater than 0"),
    category: z.enum(productCategories, {
        required_error: "Please select a category",
    }),
    frameMaterial: z.enum(productFrameMaterial, {
        required_error: "Please select a frame material",
    }),
    wheelSize: z.coerce.number().min(1, "Wheel size is required"),
    quantity: z.coerce.number().min(0, "Quantity cannot be negative"),
    description: z.string().min(1, "Description is required"),
    image: z
        .custom<File | undefined>((file) => {
            return (
                file instanceof File &&
                file.size > 0 &&
                ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'].includes(file.type)
            );
        }, {
            message: "Product image must be a valid image file (jpg, jpeg, png, webp)",
        })
});
export const updateProductFormSchema = z.object({
    name: z.string().min(1, "Bicycle name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.coerce.number().min(0.01, "Price must be greater than 0"),
    category: z.enum(productCategories, {
        required_error: "Please select a category",
    }),
    frameMaterial: z.enum(productFrameMaterial, {
        required_error: "Please select a frame material",
    }),
    wheelSize: z.coerce.number().min(1, "Wheel size is required"),
    quantity: z.coerce.number().min(0, "Quantity cannot be negative"),
    description: z.string().min(1, "Description is required"),
});