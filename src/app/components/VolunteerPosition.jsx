"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getVolunteeringOptions ,submitVolunteerApplication} from "../api/queries";
import { handle_toast_notification } from "./Toast";
import { useStateContext } from "../Context/StateContext";


const VolunteerPosition = () => {

  const {set_show_processing} = useStateContext()
  const [volunteeringOptions, setVolunteeringOptions] = useState([]);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [volunteerInfo, set_volunteer_data] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    location: "",
    volunteeringType: "",
  });

  // Handle input changes
  const onInputChange = (e) => {
    const { name, value } = e.target;
    set_volunteer_data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handlePostSubmission = async (e) => {
    e.preventDefault();
   
    setError(false);
  
    const { name, email, phoneNumber, country, location, volunteeringType } = volunteerInfo;
  
    // Validate required fields
    if (!name || !email || !phoneNumber || !country || !location || !volunteeringType) {
      setError(true);
      handle_toast_notification({message : "Please Fill All Fields", type: "error"})
      
      return;
    }
  
    // Submit the form data
    try {
      set_show_processing(true)
      
      const res = await submitVolunteerApplication(volunteerInfo);
  
      // Check if the submission was successful
      if (res.createVolunteer) {
        set_show_processing(false)
        handle_toast_notification({message : "Volunteering Successfully Sent ", type: "success"})
        // Reset the form
        set_volunteer_data({
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
          location: "",
          volunteeringType: "",
        });
  
        // Show success message
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting volunteer application:", error);
      set_show_processing(false)
      setError(true);
    }
  };

  // Fetch volunteering options on component mount
  useEffect(() => {

    if(volunteeringOptions.length > 0) return;
    const fetchVolunteers = async () => {
      const response = await getVolunteeringOptions();
      console.log(response);
      setVolunteeringOptions(response);
    };
    
    fetchVolunteers();
  }, []);

  return (
    <div className="mt-[5em]">
      <h1>
        Volunteering <br /> Positions
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2 h-[70vw] md:h-[50vh]">
          <Image fill className="cover" src={"/Volunteer Image.svg"} alt="Volunteer" />
        </div>
        <form className="md:w-1/2 flex gap-[1em] align-center justify-between flex-wrap">
          {/* Name */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Name</label>
            <input
              name="name"
              value={volunteerInfo.name}
              onChange={onInputChange}
              className="text-white bg-primary_color p-2"
              type="text"
            />
          </div>

          {/* Email */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Email</label>
            <input
              name="email"
              value={volunteerInfo.email}
              onChange={onInputChange}
              type="email"
              className="text-white bg-primary_color p-2"
            />
          </div>

          {/* Phone Number */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Phone Number</label>
            <input
              name="phoneNumber"
              value={volunteerInfo.phoneNumber}
              onChange={onInputChange}
              className="bg-primary_color text-white p-2"
              type="text"
            />
          </div>

          {/* Country */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Country</label>
            <input
              name="country"
              value={volunteerInfo.country}
              onChange={onInputChange}
              className="bg-primary_color text-white p-2"
              type="text"
            />
          </div>

          {/* Location */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Location</label>
            <input
              name="location"
              value={volunteerInfo.location}
              onChange={onInputChange}
              className="bg-primary_color text-white p-2"
              type="text"
            />
          </div>

          {/* Volunteering Type */}
          <div className="flex input_div flex-col md:gap-[1em]">
            <label className="text-primary_color">Volunteering Type</label>
            <select
              name="volunteeringType"
              value={volunteerInfo.volunteeringType}
              onChange={onInputChange}
              className="bg-primary_color text-white p-2"
            >
              <option value="">Select an option</option>
              {volunteeringOptions.map((each_option, index) => (
                <option key={index} value={each_option.name}>
                  {each_option.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handlePostSubmission}
            className="mt-[1em] mx-auto rounded-none text-primary_color bg-none p-0 py-2 px-8 border-primary_color"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPosition;