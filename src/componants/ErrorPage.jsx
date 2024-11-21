
const ErrorPage = () => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-extrabold text-gray-600">404</h1>
            <h2 className="text-4xl font-bold mt-4">Page Not Found</h2>
            <p className="text-lg mt-2 text-gray-600 text-center">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="mt-6 bg-gray-600 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow hover:bg-gray-700 transition"
            >
                Go Back to Home
            </a>
        </div>
        </div>
    );
};

export default ErrorPage;