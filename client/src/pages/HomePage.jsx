// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full text-center mt-20 px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          Welcome to JobQuest
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Integrating AI-powered job matching, skill gap analysis, and adaptive
          learning pathways for personalized career development.
        </p>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Providing customized job and training recommendations, along with
          real-time market insights.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
