import type React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface NavigationChipProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavigationChip: React.FC<NavigationChipProps> = ({ icon, label, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gray-200 hover:shadow-sm transition-shadow"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <ChevronRight className="h-4 w-4 text-gray-400" />
    </Link>
  );
};

// Custom icons for each category
const RemoteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12V3M12 3L9 6M12 3L15 6" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MNCIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M5 21V7L13 3V21M19 21V11L13 7" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Fortune500Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 12.3137 19 9C19 5.68629 15.866 3 12 3C8.13401 3 5 5.68629 5 9C5 12.3137 8.13401 15 12 15Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15V21M8 18H16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectMgmtIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 14L12 18L3 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 10L12 14L3 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 6L12 10L3 6L12 2L21 6Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20L9 17H7C5.89543 17 5 16.1046 5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15C19 16.1046 18.1046 17 17 17H15L12 20Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9H15M9 13H15" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NavigationChips = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <NavigationChip
            icon={<RemoteIcon />}
            label="Remote"
            href="#"
          />
          <NavigationChip
            icon={<MNCIcon />}
            label="MNC"
            href="#"
          />
          <NavigationChip
            icon={<Fortune500Icon />}
            label="Fortune 500"
            href="#"
          />
          <NavigationChip
            icon={<ProjectMgmtIcon />}
            label="Project Mgmt"
            href="#"
          />
          <NavigationChip
            icon={<MarketingIcon />}
            label="Marketing"
            href="#"
          />
          <NavigationChip
            icon={<ProjectMgmtIcon />}
            label="Engineering"
            href="#"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationChips;
