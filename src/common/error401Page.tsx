import { Link } from "react-router-dom";

const Error401Page = () => {
  const role = localStorage.getItem("role");

  const url =
    role === "USER"
      ? "/client"
      : role === "CONDUCTEUR"
      ? "/conducteur"
      : role === "ADMIN"
      ? "/admin/dashboard"
      : "/";

  return (
    <div className="h-screen flex flex-col items-center space-y-20">
      <img src="./../../public/401.svg" alt="unauth" className="w-1/3" />
      <button className="mt-5">
        {/* depending on the role return to the appropriate dashboard */}

        <Link
          to={url}
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#407bff] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="text-2xl relative block px-8 py-3 border border-current font-bold text-white">
            Revenir
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Error401Page;
