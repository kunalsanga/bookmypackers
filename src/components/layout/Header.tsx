"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [showJobsDropdown, setShowJobsDropdown] = useState(false);
  const [showCompaniesDropdown, setShowCompaniesDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showEmployerDropdown, setShowEmployerDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <Image
              src="/images/naukri-logo.svg"
              alt="Naukri Logo"
              width={75}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {/* Jobs Dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setShowJobsDropdown(true)}
                onMouseLeave={() => setShowJobsDropdown(false)}
              >
                <span className="flex items-center">
                  Jobs
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
              {showJobsDropdown && (
                <div
                  className="absolute left-0 w-64 mt-2 bg-white border rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setShowJobsDropdown(true)}
                  onMouseLeave={() => setShowJobsDropdown(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Popular categories</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">IT jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Sales jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Marketing jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Data Science jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">HR jobs</Link>
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Jobs in demand</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Fresher jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">MNC jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Remote jobs</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Work from home jobs</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Companies Dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setShowCompaniesDropdown(true)}
                onMouseLeave={() => setShowCompaniesDropdown(false)}
              >
                <span className="flex items-center">
                  Companies
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
              {showCompaniesDropdown && (
                <div
                  className="absolute left-0 w-64 mt-2 bg-white border rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setShowCompaniesDropdown(true)}
                  onMouseLeave={() => setShowCompaniesDropdown(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Explore categories</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Unicorn</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">MNC</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Startup</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Product based</Link>
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Explore collections</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Top companies</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">IT companies</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Fintech companies</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <span className="flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
              {showServicesDropdown && (
                <div
                  className="absolute left-0 w-64 mt-2 bg-white border rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Resume writing</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Text resume</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Visual resume</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Resume critique</Link>
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-xs text-gray-500 mb-2">Find jobs</h3>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Jobs4u</Link>
                      <Link href="#" className="block text-sm hover:text-primary py-1">Priority applicant</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Auth Buttons and Employer Dropdown */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hidden md:block text-primary text-sm font-medium hover:text-primary/80 transition-colors">
            Login
          </Link>
          <Link href="#" className="hidden md:block bg-naukri-orange text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
            Register
          </Link>

          {/* Employer Dropdown */}
          <div className="relative hidden md:block">
            <button
              className="text-gray-700 text-sm hover:text-primary transition-colors flex items-center"
              onMouseEnter={() => setShowEmployerDropdown(true)}
              onMouseLeave={() => setShowEmployerDropdown(false)}
            >
              <span className="flex items-center">
                For employers
                <ChevronDown className="ml-1 h-4 w-4" />
              </span>
            </button>
            {showEmployerDropdown && (
              <div
                className="absolute right-0 w-48 mt-2 bg-white border rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setShowEmployerDropdown(true)}
                onMouseLeave={() => setShowEmployerDropdown(false)}
              >
                <Link href="#" className="block px-4 py-2 text-sm hover:text-primary">Buy online</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:text-primary">Naukri Talent Cloud</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:text-primary">Employer Login</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <div className="flex justify-between items-center py-2">
                <button className="text-gray-800 font-medium">Jobs</button>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="border-b pb-3">
              <div className="flex justify-between items-center py-2">
                <button className="text-gray-800 font-medium">Companies</button>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="border-b pb-3">
              <div className="flex justify-between items-center py-2">
                <button className="text-gray-800 font-medium">Services</button>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="border-b pb-3">
              <div className="flex justify-between items-center py-2">
                <button className="text-gray-800 font-medium">For employers</button>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="#"
                className="block w-1/2 text-center py-2 text-primary border border-primary rounded font-medium"
              >
                Login
              </Link>
              <Link
                href="#"
                className="block w-1/2 text-center py-2 bg-naukri-orange text-white rounded font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
