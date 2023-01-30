import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center py-12">
        <Link
          className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          to="/"
        >
          Minimal Blog
        </Link>
        <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
      </div>
    </header>
  );
};
