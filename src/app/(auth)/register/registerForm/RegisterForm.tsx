'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterSchema } from "../schema/Register.schema"
import { registerApi } from "../registerAction/Register.action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"



export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { control, handleSubmit } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        }
    })

    async function onSubmit(data: RegisterSchema) {
        setIsLoading(true)
        try {
            const result = await registerApi(data)
            if (result.success) {
                toast.success(result.message, {
                    description: "You will be redirected to the login page",
                    duration: 2000,
                    className: "bg-green-500 text-white",
                    position: "top-right",
                })
                setTimeout(() => {
                    router.push("/login")
                }, 2000)
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error("Something went wrong, please try again")
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {/* Social Login Buttons */}
            <div className="flex gap-2 mb-6">
                <Button type="button" variant="outline" size="lg" className="w-1/2 cursor-pointer gap-2">
                    <svg className="size-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </Button>
                <Button type="button" variant="outline" size="lg" className="w-1/2 cursor-pointer gap-2">
                    <svg className="size-5" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Continue with Facebook
                </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="text-sm text-gray-500">or register with email</span>
                <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            {/* form */}
            <form >
                <FieldGroup>
                    {/* name */}
                    <Controller
                        name="name"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="name">
                                    Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your name"
                                    autoComplete="off"
                                    type="text"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>

                        )}
                    />
                    {/* email */}
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="email">
                                    Email
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your email"
                                    autoComplete="off"
                                    type="email"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>

                        )}
                    />
                    {/* password */}
                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="password"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your password"
                                    autoComplete="off"
                                    type="password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>

                        )}
                    />
                    {/* rePassword */}
                    <Controller
                        name="rePassword"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="rePassword">
                                    rePassword
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="rePassword"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Re-enter your password"
                                    autoComplete="off"
                                    type="password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>

                        )}
                    />
                    {/* phone */}
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="phone">
                                    Phone
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="phone"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your phone number"
                                    autoComplete="off"
                                    type="text"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>

                        )}
                    />
                </FieldGroup>
                <Button type="submit" onClick={handleSubmit(onSubmit)} size="lg" className='w-full bg-[#16A34A] mt-6 cursor-pointer gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    {isLoading ? <Spinner /> : "Create My Account"}
                </Button>
            </form>

        </div>
    )
}
