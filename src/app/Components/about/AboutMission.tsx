// components/about/MissionStory.tsx
import React from 'react';
import { missionData } from '../../../../public/assets';

export const MissionStory: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopyGram</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Your trusted companion in the world of online shopping
        </p>
      </div>

      <div className="p-8 md:p-12">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">{missionData.mission}</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <div className="text-purple-600 text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">{missionData.vision}</p>
          </div>
        </div>

        {/* Brand Story */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {missionData.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};