import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/images/naukri-logo.svg"
                  alt="Naukri Logo"
                  width={75}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Connect with us</h4>
            <div className="flex space-x-3">
              <Link href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Youtube className="h-4 w-4 text-gray-600" />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Employer home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-4">Help center</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Summons/Notices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Grievances
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Report issue
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Fraud alert
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Trust & safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-4">Apply on the go</h4>
            <p className="text-sm text-gray-600 mb-4">Get real-time job updates on our App</p>
            <div className="flex space-x-2">
              <Link href="#">
                <div className="border border-gray-300 rounded-md px-2 py-1">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-700">Available on the</span>
                  </div>
                  <div className="font-medium text-gray-900">App Store</div>
                </div>
              </Link>
              <Link href="#">
                <div className="border border-gray-300 rounded-md px-2 py-1">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-700">GET IT ON</span>
                  </div>
                  <div className="font-medium text-gray-900">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            All trademarks are the property of their respective owners.<br />
            All rights reserved © 2023 Info Edge (India) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
