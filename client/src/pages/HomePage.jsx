import { useEffect } from "react";
import Hero from "../components/Hero";
import VideoTour from "../components/VideoTour";
import StatsStrip from "../components/StatsStrip";
import FeatureShowcase from "../components/FeatureShowcase";
import RoomGallery from "../components/RoomGallery";
import Testimonials from "../components/Testimonials";
import SpecialOffer from "../components/SpecialOffer";

export default function HomePage() {
  useEffect(() => {
    document.title = "Shreenithi Ladies Hostel - Safe & Affordable Ladies Hostel in Chennai Since 2000 | Mount Road Location";
  }, []);

  return (
    <>
      <Hero />
      <VideoTour />
      <StatsStrip />
      <FeatureShowcase />
      <RoomGallery />
      <Testimonials />
      <SpecialOffer />
    </>
  );
}
