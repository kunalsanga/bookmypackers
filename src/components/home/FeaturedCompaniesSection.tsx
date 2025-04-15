"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface CompanyCardProps {
  name: string;
  rating: number;
  reviewCount: string;
  description: string;
  logoPlaceholder: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  rating,
  reviewCount,
  description,
  logoPlaceholder,
}) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-md ${logoPlaceholder} flex items-center justify-center text-white font-bold`}>
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-gray-800">{name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center bg-green-50 px-2 py-0.5 rounded text-xs text-green-700">
              <span>{rating}</span>
              <Star className="h-3 w-3 ml-0.5 fill-green-700 text-green-700" />
            </div>
            <span className="text-xs text-gray-500 ml-2">{reviewCount} reviews</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      <Link href="#" className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
        View jobs
      </Link>
    </div>
  );
};

const FeaturedCompaniesSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6">Featured companies actively hiring</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-3 py-1.5 text-sm rounded-full ${
              activeTab === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-full ${
              activeTab === "it" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab("it")}
          >
            IT Services
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-full ${
              activeTab === "bfsi" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab("bfsi")}
          >
            BFSI
          </button>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CompanyCard
            name="Avalara Technologies"
            rating={3.3}
            reviewCount="306"
            description="We're transforming tax through tech."
            logoPlaceholder="bg-orange-500"
          />

          <CompanyCard
            name="Nagarro"
            rating={4.0}
            reviewCount="4.2K+"
            description="Leader in digital product engineering."
            logoPlaceholder="bg-teal-500"
          />

          <CompanyCard
            name="Optum"
            rating={4.0}
            reviewCount="6.3K+"
            description="Leading digital health tech company in India."
            logoPlaceholder="bg-orange-400"
          />

          <CompanyCard
            name="Reliance Industries"
            rating={4.0}
            reviewCount="16.7K+"
            description="Indian multinational conglomerate company."
            logoPlaceholder="bg-blue-600"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-block border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View all companies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;
