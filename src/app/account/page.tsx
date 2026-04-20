import { getServerSession } from "next-auth"
import { NextAuthConfig } from "@/Auth"
import { UserCircle } from "lucide-react"

export default async function AccountPage() {
    const session = await getServerSession(NextAuthConfig)
    const user = session?.user

    return (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Account Details</h1>
                <p className="text-gray-500 text-sm">
                    View and update your personal information. Note that some fields may not be editable.
                </p>
            </div>

            <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <UserCircle size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 text-lg">{user?.name || "User"}</h3>
                    <p className="text-gray-500">{user?.email}</p>
                </div>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.name || ""}
                            disabled
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed outline-none text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        defaultValue={user?.email || ""}
                        disabled
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed outline-none text-sm"
                    />
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        disabled
                        className="px-6 py-3 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed transition-all"
                    >
                        Save Changes
                    </button>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
                        Profile editing is currently locked by the administrator.
                    </p>
                </div>
            </form>
        </div>
    )
}
