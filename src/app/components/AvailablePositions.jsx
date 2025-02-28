"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimateUp from "./AnimateUp";
import { getAvailablePositions } from "../api/queries";

const AvailablePositions = () => {
  const [availablePositions, setAvailablePositions] = useState([]);

  useEffect(() => {
    console.log("useEffect is running...");

    const fetchAvailableJobs = async () => {
      try {
        const data = await getAvailablePositions();
        console.log("Fetched jobs:", data);

        if (Array.isArray(data)) {
          setAvailablePositions(data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setAvailablePositions([]);
      }
    };

    fetchAvailableJobs();
  }, []); // Run only once on mount

  return (
    <div className="flex flex-col gap-6">
      <h2>
        {availablePositions.length === 0
          ? "No Positions Available"
          : "Available Positions"}
      </h2>
      {availablePositions.length === 0 ? (
        <p>No job positions have been posted. But we would post some if available here.</p>
      ) : (
        availablePositions.map((eachJob, index) => (
          <AnimateUp key={index}>
            <div className="flex md:items-center flex-wrap flex-col md:flex-row items-start gap-2 justify-between border-b-2 border-b-primary_color py-2">
              <h4 className="md:w-[20%] font-medium">
                {eachJob?.node?.jobName}
              </h4>
              <p className="md:w-1/2">{eachJob?.node?.jobExcerpt}</p>
              <p className="first_letter_capitalize font-bold">
                {eachJob.node?.jobStatus}
              </p>
              <Link href={`/joinUs/${eachJob?.node?.slug}`}>
                <button className="md:hover:scale-[1.1] md:hover:bg-primary_color md:hover:text-white duration-700 border-primary_color rounded-none bg-none text-primary_color px-[3em]">
                  Apply
                </button>
              </Link>
            </div>
          </AnimateUp>
        ))
      )}
    </div>
  );
};

export default AvailablePositions;
