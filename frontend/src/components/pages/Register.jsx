import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Register = () => {
  // const history = useHistory();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    profilePicture: null,
    gender: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  // Validate the form data
  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstName) validationErrors.firstName = "First Name is required";
    if (!formData.lastName) validationErrors.lastName = "Last Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Email is invalid";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.dob) validationErrors.dob = "Date of Birth is required";
    if (!formData.country) validationErrors.country = "Country is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.district) validationErrors.district = "District is required";
    if (!formData.pincode) validationErrors.pincode = "Pincode is required";
    if (!formData.profilePicture) validationErrors.profilePicture = "Profile picture is required";
    if (!formData.gender) validationErrors.gender = "Gender is required";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("dob", formData.dob);
    formDataToSubmit.append("country", formData.country);
    formDataToSubmit.append("state", formData.state);
    formDataToSubmit.append("district", formData.district);
    formDataToSubmit.append("pincode", formData.pincode);
    formDataToSubmit.append("profilePicture", formData.profilePicture);
    formDataToSubmit.append("gender", formData.gender);

    try {
      const response = await axios.post("http://localhost:8000/api/register", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Redirect to the home page after successful registration
        // history.push("/");
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-pink-500 to-orange-500 text-white">
      {/* Welcome Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-md lg:text-lg mb-6">
          You are 30 seconds away from earning your own money!
        </p>
        <button
          className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-md hover:bg-gray-200"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-2/3 bg-white text-black rounded-t-2xl lg:rounded-l-2xl p-6 lg:p-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center lg:justify-end space-x-4 mb-6">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-full font-medium">
            Basic
          </button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-medium hover:bg-orange-100">
            Details
          </button>
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">
          Register Here
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="country"
              placeholder="Country *"
              value={formData.country}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.country && <p className="text-red-500">{errors.country}</p>}
            <input
              type="text"
              name="state"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.state && <p className="text-red-500">{errors.state}</p>}
            <input
              type="text"
              name="district"
              placeholder="District *"
              value={formData.district}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.district && <p className="text-red-500">{errors.district}</p>}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode *"
              value={formData.pincode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
          </div>

          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Profile Picture *</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.profilePicture && <p className="text-red-500">{errors.profilePicture}</p>}
          </div>

          {/* Gender */}
          <div className="flex space-x-6 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                className="mr-2"
                checked={formData.gender === "male"}
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                className="mr-2"
                checked={formData.gender === "female"}
              />
              Female
            </label>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
