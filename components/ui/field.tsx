import * as React from "react"

import { cn } from "@/lib/utils"

function Field({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field"
            className={cn("space-y-2", className)}
            {...props}
        />
    )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-group"
            className={cn("space-y-4", className)}
            {...props}
        />
    )
}

function FieldLabel({
    className,
    ...props
}: React.ComponentProps<"label">) {
    return (
        <label
            data-slot="field-label"
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            {...props}
        />
    )
}

function FieldError({
    className,
    errors,
    ...props
}: React.ComponentProps<"p"> & { errors?: ({ message?: string } | undefined)[] }) {
    const message = errors?.find((e) => e?.message)?.message
    if (!message) return null

    return (
        <p
            data-slot="field-error"
            className={cn("text-sm font-medium text-destructive", className)}
            {...props}
        >
            {message}
        </p>
    )
}

export { Field, FieldGroup, FieldLabel, FieldError }
