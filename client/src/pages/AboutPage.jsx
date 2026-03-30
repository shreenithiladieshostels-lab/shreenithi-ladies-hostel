import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import About from "../components/About";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us - Shreenithi Ladies Hostel | Chennai's Trusted Hostel Since 2000 | Mount Road";
  }, []);

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Chennai's trusted ladies hostel since 2000 — providing safe, comfortable, and affordable accommodation for women on Mount Road."
        breadcrumb="About"
      />
      <About />
    </>
  );
}
