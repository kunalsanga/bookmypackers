import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JobsListingWithFilters from "@/components/jobs/JobsListingWithFilters";

export default function JobsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-6 pb-16 bg-gray-50 flex-grow">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-6">Jobs In India</h1>
          <JobsListingWithFilters />
        </div>
      </div>
      <Footer />
    </main>
  );
}
