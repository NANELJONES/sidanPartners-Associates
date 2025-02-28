"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { getTestimonials } from '../lib';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const all_testimonials = await getTestimonials();
      setTestimonials((prev) => [...prev, ...all_testimonials]);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
        fetchTestimonials(); // Fetch more testimonials when near the bottom
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [loading]);

  const getExcerpt = (text, limit = 20) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  const toggleTestimonial = (index) => {
    if (expandedTestimonial === index) {
      setExpandedTestimonial(null); // Collapse if already expanded
    } else {
      setExpandedTestimonial(index); // Expand the clicked testimonial
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      controls.start({ height: containerRef.current.scrollHeight });
    }
  }, [testimonials, controls]);

  return (
    <div className="w-full border p-8 border-secondary_color">
      <p>Total : {testimonials.length}</p>
      <div
        ref={containerRef}
        className="overflow-y-auto h-[80vh] relative scroll-smooth"
      >
        <motion.div
          className="absolute left-0 top-0 w-1 bg-secondary_color"
          initial={{ height: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        />
        {testimonials.map((each_client, index) => (
          <div
            key={index}
            className={`border-t-4 bg-primary_color h-auto items-center border-secondary_color justify-around p-10 max-w-[600px] flex flex-col transition-all duration-300 ease-in-out ${
              expandedTestimonial === index ? "h-auto" : "h-[30em] max-h-[600px]"
            }`}
            onClick={() => toggleTestimonial(index)}
          >
            <div className="flex gap-4 h-full">
              {/* <img
                src={each_client?.node?.personImage?.url}
                className="w-[3em] h-[3em] object-cover rounded-full"
                alt="Client"
              /> */}
              <h5 className="text-primary_color_light">
                <strong>{each_client?.node?.personName}</strong>
                <br />
                <p className="text-primary_color_light">
                  {each_client?.node?.personPosition}
                </p>
              </h5>
            </div>

            <br />
            <p className="text-primary_color_light border-t p-2">
              {expandedTestimonial === index
                ? each_client.node?.testimony
                : getExcerpt(each_client.node?.testimony)}
            </p>

            <button
              className="text-primary_color_light mt-2 bg-none rounded-none border-0 p-1 border border-b-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent div click event
                toggleTestimonial(index);
              }}
            >
              {expandedTestimonial === index ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
        {loading && <p className="text-primary_color_light">Loading more testimonials...</p>}
      </div>
    </div>
  );
};

export default Testimonials;