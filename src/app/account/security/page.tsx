import { ShieldAlert } from "lucide-react"

export const metadata = {
    title: "Security & Passwords | FreshCart",
    description: "Manage your account security and password",
}

export default function SecurityPage() {
    return (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Security Settings</h1>
                <p className="text-gray-500 text-sm">
                    Manage your password and keep your account secure.
                </p>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                <ShieldAlert className="flex-shrink-0 text-amber-500" size={20} />
                <p>
                    <strong>Security Notice:</strong> Make sure your new password is at least 8 characters long and includes a mix of letters and numbers.
                </p>
            </div>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your current password"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Create a new password"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm your new password"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-200 hover:from-green-600 hover:to-green-700 transition-all active:scale-95"
                    >
                        Update Password
                    </button>
                    <p className="text-xs text-gray-400 mt-3">
                        Updating your password will automatically sign you out of all other devices.
                    </p>
                </div>
            </form>
        </div>
    )
}
