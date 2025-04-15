import type React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CompanyCardProps {
  title: string;
  count: string;
  companyLogos: React.ReactNode;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ title, count, companyLogos }) => {
  return (
    <Link href="#" className="block">
      <div className="bg-white rounded-md border border-gray-200 p-4 h-full hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium text-gray-800">{title}</h3>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
        <p className="text-xs text-gray-500 mb-4">{count} are actively hiring</p>
        <div className="flex flex-wrap gap-2">{companyLogos}</div>
      </div>
    </Link>
  );
};

const CompanyLogo = ({ bg }: { bg: string }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold`}
    />
  );
};

const TopCompaniesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-8">Top companies hiring now</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <CompanyCard
            title="MNCs"
            count="2.1K+"
            companyLogos={
              <>
                <CompanyLogo bg="bg-blue-500" />
                <CompanyLogo bg="bg-purple-500" />
                <CompanyLogo bg="bg-red-500" />
                <CompanyLogo bg="bg-green-500" />
              </>
            }
          />

          <CompanyCard
            title="Edtech"
            count="156"
            companyLogos={
              <>
                <CompanyLogo bg="bg-cyan-500" />
                <CompanyLogo bg="bg-amber-500" />
                <CompanyLogo bg="bg-emerald-500" />
              </>
            }
          />

          <CompanyCard
            title="Healthcare"
            count="617"
            companyLogos={
              <>
                <CompanyLogo bg="bg-teal-500" />
                <CompanyLogo bg="bg-red-400" />
                <CompanyLogo bg="bg-blue-600" />
                <CompanyLogo bg="bg-indigo-500" />
              </>
            }
          />

          <CompanyCard
            title="Unicorns"
            count="99"
            companyLogos={
              <>
                <CompanyLogo bg="bg-pink-500" />
                <CompanyLogo bg="bg-orange-500" />
                <CompanyLogo bg="bg-amber-400" />
              </>
            }
          />

          <CompanyCard
            title="Internet"
            count="255"
            companyLogos={
              <>
                <CompanyLogo bg="bg-indigo-600" />
                <CompanyLogo bg="bg-blue-500" />
                <CompanyLogo bg="bg-violet-500" />
                <CompanyLogo bg="bg-sky-500" />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TopCompaniesSection;
