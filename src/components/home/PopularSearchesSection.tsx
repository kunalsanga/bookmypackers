import React from 'react';
import Link from 'next/link';
import { Tag, TrendingUp } from 'lucide-react';

const popularSearches = [
  { id: 1, name: 'Software Engineer', count: '35.2K+ Jobs' },
  { id: 2, name: 'Data Scientist', count: '5.8K+ Jobs' },
  { id: 3, name: 'Full Stack Developer', count: '8.7K+ Jobs' },
  { id: 4, name: 'Product Manager', count: '4.3K+ Jobs' },
  { id: 5, name: 'Business Analyst', count: '7.5K+ Jobs' },
  { id: 6, name: 'UX Designer', count: '3.1K+ Jobs' },
  { id: 7, name: 'Digital Marketing', count: '4.8K+ Jobs' },
  { id: 8, name: 'DevOps Engineer', count: '6.2K+ Jobs' },
  { id: 9, name: 'Sales Executive', count: '15.4K+ Jobs' },
  { id: 10, name: 'HR Manager', count: '4.5K+ Jobs' },
];

const PopularSearchesSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">Popular Searches</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {popularSearches.map((search) => (
            <Link
              key={search.id}
              href="#"
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md hover:border-primary hover:shadow-sm transition-all"
            >
              <Tag className="h-4 w-4 text-gray-500" />
              <div>
                <span className="text-sm font-medium text-gray-800 block">{search.name}</span>
                <span className="text-xs text-gray-500">{search.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearchesSection;
