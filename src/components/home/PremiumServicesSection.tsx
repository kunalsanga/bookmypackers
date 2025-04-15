"use client";

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Medal, Users, ChevronRight, BookOpen, Database } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkText, linkUrl }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        href={linkUrl}
        className="inline-flex items-center text-primary text-sm font-medium hover:underline"
      >
        {linkText}
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const PremiumServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Accelerate your job search with premium services</h2>
          <Link
            href="#"
            className="text-primary text-sm font-medium hover:underline hidden md:flex items-center"
          >
            View all services
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Resume Writing"
            description="Create a professional resume that highlights your skills and experience to stand out to employers."
            linkText="Get started"
            linkUrl="#"
          />

          <ServiceCard
            icon={<Medal className="h-6 w-6 text-primary" />}
            title="Priority Applicant"
            description="Increase your chances of getting noticed by recruiters with priority application status."
            linkText="Upgrade now"
            linkUrl="#"
          />

          <ServiceCard
            icon={<Database className="h-6 w-6 text-primary" />}
            title="Resume Database"
            description="Make your resume more visible to recruiters with enhanced searchability."
            linkText="Learn more"
            linkUrl="#"
          />

          <ServiceCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Recruiter Connection"
            description="Get direct access to top recruiters in your industry for better job opportunities."
            linkText="Connect now"
            linkUrl="#"
          />

          <ServiceCard
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            title="Career Booster"
            description="Get personalized career guidance and coaching to advance your professional growth."
            linkText="Explore plans"
            linkUrl="#"
          />

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Premium Membership</h3>
              <p className="text-sm text-white/90 mb-4">
                Get unlimited access to all premium services with our subscription plans.
              </p>
              <div className="bg-white/20 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">Resume Boost</span>
                  <span className="text-xs">✓</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">Priority Applicant</span>
                  <span className="text-xs">✓</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">Recruiter Access</span>
                  <span className="text-xs">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Career Guidance</span>
                  <span className="text-xs">✓</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <span className="block text-xs text-white/80">Starting at</span>
                  <span className="text-xl font-bold">₹ 999</span>
                  <span className="text-xs text-white/80 ml-1">per month</span>
                </div>
                <span className="text-xs bg-white/30 rounded-full px-2 py-1">Save 30%</span>
              </div>
              <Link
                href="#"
                className="block bg-white text-primary text-center py-2 rounded-md font-medium hover:bg-white/90 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="#"
            className="inline-flex items-center text-primary text-sm font-medium hover:underline"
          >
            View all services
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;
