import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import ThirdPartyLoader from "../components/ThirdPartyLoader";
import Footer from "../components/Footer";

export default function RootLayout() {
  // Temporarily disable third‑party widgets in dev to prevent loader/runtime errors.
  // We'll re-enable selectively after core pages are identical.
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="app">
      <ThirdPartyLoader />
      <Header />
      <main style={{ minHeight: "60vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
