import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <div
      className="p-4 border-t border-gray-200 text-red-600 cursor-pointer hover:bg-red-50 flex items-center"
      onClick={logout}
    >
      <FaSignOutAlt className="mr-2" /> Logout
    </div>
  );
};

export default Logout;
