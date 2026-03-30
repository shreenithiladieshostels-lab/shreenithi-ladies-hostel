import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Branches from "../components/Branches";
import MapSection from "../components/MapSection";

export default function BranchesPage() {
  useEffect(() => {
    document.title = "Branch Locations - Shreenithi Ladies Hostel | Mylapore, Mount Road & Pallikaranai";
  }, []);

  return (
    <>
      <PageBanner
        title="Branch Locations"
        subtitle="Three convenient locations across Chennai — call us for accommodation at any branch."
        breadcrumb="Branches"
      />
      <Branches />
      <MapSection />
    </>
  );
}
