import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
            <h1 className="text-[150px] font-extrabold text-[#16A34A] mb-0 tracking-tighter leading-none">
                404
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-6">
                Oops! Page Not Found.
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto text-lg">
                We can't seem to find the page you're looking for. It might have been removed, renamed, or temporarily unavailable.
            </p>

            <Link
                href="/"
                className="bg-[#16A34A] text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>
        </div>
    );
}
