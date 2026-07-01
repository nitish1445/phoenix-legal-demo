import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-pl-bg">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
