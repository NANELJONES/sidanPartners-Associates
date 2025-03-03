import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltComponent({ children }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5, // Reduced tilt effect
        speed: 200, // Slower movement
        glare: true,
        "max-glare": 0.3, // Less intense glare
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="tilt-container">
      {children}
    </div>
  );
}
