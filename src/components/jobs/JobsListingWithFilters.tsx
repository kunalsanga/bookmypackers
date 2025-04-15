"use client";

import type React from 'react';
import { useState } from 'react';
import { Search, MapPin, ChevronDown, Briefcase, Building, Clock, ChevronUp, X, Filter } from 'lucide-react';
import Link from 'next/link';

// Mock data for jobs
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Bangalore',
    experience: '3-5 years',
    salary: '15-25 LPA',
    skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
    postedOn: '2 days ago',
    description: 'We are looking for an experienced Software Engineer who is passionate about building innovative software solutions...',
    logo: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Hyderabad',
    experience: '5-8 years',
    salary: '25-35 LPA',
    skills: ['Product Strategy', 'Roadmap Planning', 'Agile', 'User Research'],
    postedOn: '5 days ago',
    description: 'Seeking a skilled Product Manager to define product strategy, create roadmaps, and drive product development...',
    logo: 'bg-purple-500'
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'AnalyticsAI',
    location: 'Mumbai',
    experience: '2-5 years',
    salary: '18-30 LPA',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    postedOn: '1 day ago',
    description: 'Join our data science team to build predictive models, analyze data, and deliver actionable insights...',
    logo: 'bg-green-500'
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'DesignEdge',
    location: 'Delhi/NCR',
    experience: '3-6 years',
    salary: '12-20 LPA',
    skills: ['Figma', 'User Research', 'Wireframing', 'Design Systems'],
    postedOn: '3 days ago',
    description: 'Looking for a talented UX/UI Designer to create intuitive and engaging user experiences for our products...',
    logo: 'bg-orange-500'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudInfra',
    location: 'Pune',
    experience: '4-7 years',
    salary: '20-30 LPA',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    postedOn: '4 days ago',
    description: 'Join us to build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability...',
    logo: 'bg-teal-500'
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'WebTech Solutions',
    location: 'Bangalore',
    experience: '3-6 years',
    salary: '18-28 LPA',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    postedOn: '2 days ago',
    description: 'We are seeking a Full Stack Developer who can work on both front-end and back-end development of our web applications...',
    logo: 'bg-red-500'
  },
];

const FILTER_CATEGORIES = [
  {
    name: 'Work mode',
    options: [
      { label: 'Work from office', count: '71602' },
      { label: 'Hybrid', count: '4496' },
      { label: 'Remote', count: '1665' },
    ],
  },
  {
    name: 'Experience',
    options: [
      { label: '0-1 Years', count: '18500' },
      { label: '1-3 Years', count: '32470' },
      { label: '3-5 Years', count: '24680' },
      { label: '5-7 Years', count: '15320' },
      { label: '7-10 Years', count: '8940' },
      { label: '10+ Years', count: '5690' },
    ],
  },
  {
    name: 'Salary',
    options: [
      { label: '0-3 Lakhs', count: '22347' },
      { label: '3-6 Lakhs', count: '38070' },
      { label: '6-10 Lakhs', count: '31925' },
      { label: '10-15 Lakhs', count: '20981' },
      { label: '15-25 Lakhs', count: '12450' },
      { label: '25+ Lakhs', count: '5200' },
    ],
  },
  {
    name: 'Company type',
    options: [
      { label: 'Corporate', count: '15189' },
      { label: 'Foreign MNC', count: '15114' },
      { label: 'Indian MNC', count: '6330' },
      { label: 'Startup', count: '2447' },
    ],
  },
  {
    name: 'Location',
    options: [
      { label: 'Bangalore', count: '19609' },
      { label: 'Delhi / NCR', count: '13078' },
      { label: 'Mumbai', count: '10769' },
      { label: 'Hyderabad', count: '10247' },
      { label: 'Chennai', count: '8546' },
      { label: 'Pune', count: '7823' },
    ],
  },
];

interface FilterOption {
  label: string;
  count: string;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

const FilterGroup: React.FC<{
  category: FilterCategory;
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
}> = ({ category, activeFilters, toggleFilter }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center mb-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-base font-medium text-gray-800">{category.name}</h3>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </div>

      {expanded && (
        <div className="space-y-2">
          {category.options.map((option, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="checkbox"
                id={`${category.name}-${option.label}`}
                className="h-4 w-4 text-primary border-gray-300 rounded"
                checked={activeFilters.includes(option.label)}
                onChange={() => toggleFilter(option.label)}
              />
              <label htmlFor={`${category.name}-${option.label}`} className="ml-2 text-sm text-gray-700 flex justify-between w-full">
                <span>{option.label}</span>
                <span className="text-gray-500">({option.count})</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const JobCard: React.FC<{
  job: typeof MOCK_JOBS[number];
}> = ({ job }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 ${job.logo} rounded-md flex items-center justify-center text-white font-bold`}>
          {job.company.charAt(0)}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-800 mb-1">{job.title}</h3>
          <p className="text-sm text-gray-700 mb-2">{job.company}</p>

          <div className="flex flex-wrap gap-y-2 mb-4">
            <div className="flex items-center text-gray-600 text-xs mr-4">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600 text-xs mr-4">
              <Briefcase className="h-3.5 w-3.5 mr-1" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center text-gray-600 text-xs mr-4">
              <Building className="h-3.5 w-3.5 mr-1" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center text-gray-600 text-xs">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{job.postedOn}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.map((skill, idx) => (
              <span key={idx} className="bg-blue-50 text-primary text-xs px-2 py-1 rounded">{skill}</span>
            ))}
          </div>

          <div className="flex justify-between">
            <button className="text-primary text-sm font-medium hover:underline">
              View details
            </button>
            <button className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-primary/90 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const JobsListingWithFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false); // For mobile

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-between mb-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
        </button>

        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <select className="text-sm py-2 border-gray-300 rounded-md">
            <option>Relevance</option>
            <option>Date</option>
            <option>Salary: High to Low</option>
            <option>Salary: Low to High</option>
          </select>
        </div>
      </div>

      {/* Filters Sidebar */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 lg:w-72 bg-white p-4 rounded-lg border border-gray-200 h-fit`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">All Filters</h2>
          {activeFilters.length > 0 && (
            <button
              className="text-primary text-sm hover:underline"
              onClick={clearFilters}
            >
              Clear all
            </button>
          )}
        </div>

        {/* Applied Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 bg-blue-50 text-primary text-xs px-2 py-1 rounded"
                >
                  <span>{filter}</span>
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => toggleFilter(filter)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Categories */}
        <div className="space-y-1">
          {FILTER_CATEGORIES.map((category, idx) => (
            <FilterGroup
              key={idx}
              category={category}
              activeFilters={activeFilters}
              toggleFilter={toggleFilter}
            />
          ))}
        </div>
      </div>

      {/* Jobs Listing */}
      <div className="flex-grow">
        {/* Search Bar - Desktop */}
        <div className="hidden md:flex mb-6 gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs by title, skills or company"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
            <select className="text-sm py-2 border-gray-300 rounded-md">
              <option>Relevance</option>
              <option>Date</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Job Results */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">1 - 6 of 77,765 Jobs in India</p>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {MOCK_JOBS.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <span className="px-3 py-2 bg-primary text-white rounded">1</span>
            <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">2</span>
            <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">3</span>
            <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">4</span>
            <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">5</span>
            <span>...</span>
            <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListingWithFilters;
