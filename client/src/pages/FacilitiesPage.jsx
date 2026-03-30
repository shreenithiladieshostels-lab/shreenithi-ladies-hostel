import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Facilities from "../components/Facilities";

export default function FacilitiesPage() {
  useEffect(() => {
    document.title = "Facilities & Amenities - Shreenithi Ladies Hostel | WiFi, CCTV, Food & More";
  }, []);

  return (
    <>
      <PageBanner
        title="Our Facilities"
        subtitle="Everything you need for a comfortable and safe stay, all under one roof."
        breadcrumb="Facilities"
      />
      <Facilities />
    </>
  );
}
