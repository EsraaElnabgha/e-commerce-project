// "use server"
// import { LoginSchema } from "../schema/login.schema";

// export const loginApi = async (data: LoginSchema) => {
//     const response = await fetch(`${process.env.API}auth/signin`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     if (!response.ok) {
//         return { success: false, message: result.message || "Failed to Login" };
//     }
//     return { success: true, message: result.message || "Login successfully" };
// }