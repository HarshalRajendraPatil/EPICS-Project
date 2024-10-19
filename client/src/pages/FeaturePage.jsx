// src/pages/FeaturesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const features = [
  { title: "Skill Gap Analysis", icon: "📈" },
  { title: "Adaptive Learning Pathways", icon: "📚" },
  { title: "Automated Resume Building", icon: "📝" },
  { title: "Community and Support", icon: "🤝" },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <div className="mt-10 text-center px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[800px]">
          {features.map((feature, index) => (
            <Link
              to={"/"}
              key={index}
              className="bg-white w-full shadow-2xl rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                {feature.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
