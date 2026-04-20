"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserCircle, Shield, Package, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export default function AccountSidebar() {
    const pathname = usePathname()

    const navItems = [
        {
            name: "Account Details",
            href: "/account",
            icon: <UserCircle size={20} />,
            exact: true,
        },
        {
            name: "Security",
            href: "/account/security",
            icon: <Shield size={20} />,
        },
        {
            name: "My Orders",
            href: "/allorders",
            icon: <Package size={20} />,
        },
    ]

    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-28">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                    <h2 className="font-bold text-gray-800">My Account</h2>
                </div>
                <nav className="p-3">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = item.exact 
                                ? pathname === item.href 
                                : pathname?.startsWith(item.href)

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${
                                            isActive
                                                ? "bg-green-50 text-green-700"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                    >
                                        <span className={isActive ? "text-green-600" : "text-gray-400"}>
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}

                        {/* Logout specific styling */}
                        <li className="pt-4 mt-4 border-t border-gray-100">
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
                            >
                                <LogOut size={20} className="text-red-400" />
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
