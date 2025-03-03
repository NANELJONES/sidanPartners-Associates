import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltComponent({ children }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Disable tilt on screens smaller than 768px

    if (!isMobile && tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5, // Reduced tilt effect
        speed: 200, // Slower movement
        glare: true,
        "max-glare": 0.3, // Less intense glare
      });
    }

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt?.destroy(); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-container">
      {children}
    </div>
  );
}
