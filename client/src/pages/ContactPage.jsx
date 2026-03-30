import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";
import MapSection from "../components/MapSection";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us - Shreenithi Ladies Hostel | Call +91 98844 46317";
  }, []);

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Reach out via phone, email, or visit us."
        breadcrumb="Contact"
      />
      <Contact />
      <MapSection />
    </>
  );
}
