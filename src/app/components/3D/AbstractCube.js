"use client";
import React, { useState } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next";

const AbstractCube = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-[100vh] fixed top-10">
      {/* Show loading image while Spline is loading */}
      {isLoading && (
        <div className="w-full relative h-[70vh] flex items-center justify-center">
          <Image
            alt="Loading..."
            src="/Gal.png"
            className="w-full object-contain"
            fill={true}
          />
        </div>
      )}

      {/* Spline 3D Scene */}
      <main className="h-full">
        <Spline
          scene="https://prod.spline.design/tHsluCGsRMPTK6Er/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Hide image when Spline loads
        />
      </main>
    </div>
  );
};

export default AbstractCube;
