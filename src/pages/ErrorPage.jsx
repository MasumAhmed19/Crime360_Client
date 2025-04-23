import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-10">
        
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co.com/3YSLQvPF/crime360-lopo.png"
            className="w-12 md:w-14"
            alt="Crime360 Logo"
          />
          <h4 className="text-3xl md:text-4xl font-bold text-white uppercase">
            Crime<span className="text-red-600">360</span>
          </h4>
        </Link>

        <div className="mt-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-red-500 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 px-4 md:px-0">
            Oops! The page you are looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn1 text-white text-lg px-6 py-3 rounded-md transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
