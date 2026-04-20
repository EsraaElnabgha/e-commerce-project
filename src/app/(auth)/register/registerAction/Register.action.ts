"use server"
import { RegisterSchema } from "../schema/Register.schema";

export const registerApi = async (data: RegisterSchema) => {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
        return { success: false, message: result.message || "Failed to register" };
    }
    return { success: true, message: result.message || "Registered successfully" };
}