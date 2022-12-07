import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  });
  return <div />;
}
