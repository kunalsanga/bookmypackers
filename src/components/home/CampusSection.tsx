"use client";

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface JobRoleCardProps {
  title: string;
  count: string;
  salary?: string;
}

const JobRoleCard: React.FC<JobRoleCardProps> = ({ title, count, salary }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
      {salary ? (
        <p className="text-xs text-gray-500 mb-2">{salary} • {count}</p>
      ) : (
        <p className="text-xs text-gray-500 mb-2">{count}</p>
      )}
      <Link
        href="#"
        className="text-primary text-xs font-medium flex items-center hover:underline"
      >
        View all jobs
        <ChevronRight className="h-3 w-3 ml-1" />
      </Link>
    </div>
  );
};

const CampusSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Introducing a career platform for college students & fresh grads</h2>
          <Link
            href="#"
            className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Explore now
          </Link>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3">
              <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">N</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Naukri Campus</h3>
              <p className="text-sm text-gray-600 mb-4">
                Launch your career journey with internships & jobs meant for freshers like you.
              </p>

              <div className="flex flex-wrap gap-4 mb-4">
                <button className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                  Expert speak
                </button>
                <button className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                  Courses
                </button>
                <button className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                  MOOC
                </button>
                <button className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                  Pathfinder
                </button>
              </div>

              <div className="mb-4">
                <Link
                  href="#"
                  className="text-xs text-primary font-medium border-b border-primary"
                >
                  Jobs & Internships
                </Link>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-medium text-gray-800">
                    Discover jobs across popular roles
                  </h3>
                  <span className="text-xs font-medium text-gray-500">Naukri curated collection</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  Select a role and we'll show you relevant jobs for it!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <JobRoleCard
                    title="Full Stack Developer"
                    count="10.2K+ Jobs"
                    salary="₹ 3-8L"
                  />
                  <JobRoleCard
                    title="Mobile / App Developer"
                    count="2.5K+ Jobs"
                    salary="₹ 3-9L"
                  />
                  <JobRoleCard
                    title="Front End Developer"
                    count="4.5K+ Jobs"
                    salary="₹ 3-6L"
                  />
                  <JobRoleCard
                    title="DevOps Engineer"
                    count="2.8K+ Jobs"
                    salary="₹ 4-12L"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
