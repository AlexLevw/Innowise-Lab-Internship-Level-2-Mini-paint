import React from "react";
import { useAuth } from "@contexts/index";

export default function Home(): JSX.Element {
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };

  return (
    <div>
      <div className="div">Home Page</div>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}
