import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import RoomTypes from "../components/RoomTypes";
import PricingTable from "../components/PricingTable";

export default function RoomsPage() {
  useEffect(() => {
    document.title = "Rooms & Pricing - Shreenithi Ladies Hostel | From ₹6,800/month in Chennai";
  }, []);

  return (
    <>
      <PageBanner
        title="Rooms & Pricing"
        subtitle="Choose from a variety of room types to suit your budget and comfort preferences."
        breadcrumb="Rooms & Pricing"
      />
      <RoomTypes />
      <PricingTable />
    </>
  );
}
