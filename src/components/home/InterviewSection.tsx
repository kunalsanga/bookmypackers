"use client";

import type React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CompanyInterviewProps {
  name: string;
  logo: string;
  count: string;
}

interface JobRoleInterviewProps {
  jobRole: string;
  count: string;
}

const CompanyInterviewCard: React.FC<CompanyInterviewProps> = ({ name, logo, count }) => {
  return (
    <Link href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:shadow-sm transition-shadow">
      <div className={`w-10 h-10 ${logo} rounded-md flex items-center justify-center text-white font-bold`}>
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-800">{name}</h4>
        <p className="text-xs text-gray-500">{count} interviews</p>
      </div>
      <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
    </Link>
  );
};

const JobRoleInterviewCard: React.FC<JobRoleInterviewProps> = ({ jobRole, count }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
      <div>
        <h4 className="text-sm font-medium text-gray-800">{jobRole}</h4>
        <p className="text-xs text-gray-500">{count} questions</p>
      </div>
      <Link href="#" className="text-primary text-xs hover:underline">View</Link>
    </div>
  );
};

const InterviewSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Interview Questions */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Interview questions by company
              </h2>
              <span className="text-xs text-gray-500">by AmbitionBox</span>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CompanyInterviewCard
                  name="Flipkart"
                  logo="bg-blue-500"
                  count="495 interviews"
                />
                <CompanyInterviewCard
                  name="Amazon"
                  logo="bg-orange-500"
                  count="1,376 interviews"
                />
                <CompanyInterviewCard
                  name="Byju's"
                  logo="bg-green-500"
                  count="213 interviews"
                />
                <CompanyInterviewCard
                  name="TCS"
                  logo="bg-indigo-500"
                  count="3,762 interviews"
                />
                <CompanyInterviewCard
                  name="Accenture"
                  logo="bg-purple-500"
                  count="1,879 interviews"
                />
                <CompanyInterviewCard
                  name="Cognizant"
                  logo="bg-blue-600"
                  count="1,687 interviews"
                />
              </div>

              <div className="text-center">
                <Link
                  href="#"
                  className="text-primary text-sm font-medium hover:underline flex items-center justify-center"
                >
                  View all companies
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Job Role Interview Questions */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Interview questions by role
              </h2>
              <span className="text-xs text-gray-500">by AmbitionBox</span>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <JobRoleInterviewCard
                  jobRole="Software Engineer"
                  count="1,234 questions"
                />
                <JobRoleInterviewCard
                  jobRole="Product Manager"
                  count="846 questions"
                />
                <JobRoleInterviewCard
                  jobRole="Consultant"
                  count="567 questions"
                />
                <JobRoleInterviewCard
                  jobRole="Financial Analyst"
                  count="364 questions"
                />
                <JobRoleInterviewCard
                  jobRole="Sales & Marketing"
                  count="726 questions"
                />
                <JobRoleInterviewCard
                  jobRole="Quality Engineer"
                  count="425 questions"
                />
              </div>

              <div className="text-center">
                <Link
                  href="#"
                  className="text-primary text-sm font-medium hover:underline flex items-center justify-center"
                >
                  View all roles
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewSection;
