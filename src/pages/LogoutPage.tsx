import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  });
  return <div />;
}
