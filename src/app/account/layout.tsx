import { ReactNode } from "react"
import AccountSidebar from "./AccountSidebar"

export const metadata = {
    title: "My Account | FreshCart",
    description: "Manage your account settings and preferences",
}

export default function AccountLayout({ children }: { children: ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8 min-h-[70vh]">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Fixed width Sidebar */}
                <AccountSidebar />

                {/* Flexible Content Area */}
                <main className="flex-grow min-w-0">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
