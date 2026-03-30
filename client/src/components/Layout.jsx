import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EnquireNow from "./EnquireNow";
import AnnouncementBar, { AnnouncementProvider } from "./AnnouncementBar";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <AnnouncementProvider>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <EnquireNow />
    </AnnouncementProvider>
  );
}
