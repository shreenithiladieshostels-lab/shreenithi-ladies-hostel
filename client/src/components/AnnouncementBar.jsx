import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowRight, HiSparkles } from "react-icons/hi";

const ANNOUNCEMENT_KEY = "shreenithi_announcement_dismissed";

// Context to share announcement bar state
const AnnouncementContext = createContext({ isVisible: false, height: 0 });

export function useAnnouncementBar() {
  return useContext(AnnouncementContext);
}

export function AnnouncementProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const dismissed = sessionStorage.getItem(ANNOUNCEMENT_KEY);
    setIsVisible(!dismissed);
  }, []);

  // Listen for custom event when announcement is dismissed
  useEffect(() => {
    const handleDismiss = () => setIsVisible(false);
    window.addEventListener("announcementDismissed", handleDismiss);
    return () => window.removeEventListener("announcementDismissed", handleDismiss);
  }, []);

  return (
    <AnnouncementContext.Provider value={{ isVisible, height: isVisible ? 40 : 0 }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

// ─── Update these values for your announcement ─────────────────────────────
const NEW_SITE_URL = "https://www.aostel.in/"; // ← replace with your URL
const NEW_SITE_NAME = "aostel";          // ← replace with branch name
const LOGO_URL = "/images/hostel-logo.jpg";                    // ← logo to display (using simpler logo for announcement bar)
// ────────────────────────────────────────────────────────────────────────────

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(ANNOUNCEMENT_KEY);
    if (!dismissed) setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(ANNOUNCEMENT_KEY, "true");
    window.dispatchEvent(new CustomEvent("announcementDismissed"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 40, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary-dark to-primary text-white overflow-hidden"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-10">
            <div className="flex items-center justify-between h-full">

              {/* Spacer — keeps content centred on mobile */}
              <div className="w-6 lg:hidden" />

              {/* Announcement message with logo */}
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3">
                <HiSparkles className="text-yellow-300 text-sm shrink-0 animate-pulse" />

                {/* Clickable Logo */}
                <a
                  href={NEW_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
                  title={`Visit ${NEW_SITE_NAME}`}
                >
                  <img
                    src={LOGO_URL}
                    alt="Shreenithi Hostel Logo" 
                    className="h-6 w-auto object-contain group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      // Fallback to emoji if logo fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline-block';
                    }}
                  />
                  <span className="text-xs font-bold text-white/90 hidden">🏠</span>
                </a>

                <p className="text-xs sm:text-sm font-medium text-white/90">
                  <span className="hidden sm:inline">Also check out — </span>
                  <a
                    href={NEW_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:underline underline-offset-2"
                  >
                    {NEW_SITE_NAME}
                  </a>
                </p>

                {/* CTA pill — hidden on small screens */}
                <a
                  href={NEW_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-white/20 hover:bg-white/30 px-3 py-0.5 rounded-full transition-colors"
                >
                  Visit Site <HiArrowRight className="text-[10px]" />
                </a>
              </div>

              {/* Dismiss */}
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0"
                aria-label="Dismiss announcement"
              >
                <HiX className="text-sm sm:text-base" />
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
