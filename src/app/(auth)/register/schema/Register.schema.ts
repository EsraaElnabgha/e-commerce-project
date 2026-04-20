import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters long"),
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number"),
    rePassword: z.string().nonempty("rePassword is required"),
    phone: z.string().nonempty("Phone is required").regex(/^01\d{9}$/,
        "Phone must be a valid Egyptian phone number"),
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
});

export type RegisterSchema = z.infer<typeof registerSchema>;