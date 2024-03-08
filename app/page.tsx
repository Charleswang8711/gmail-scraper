
import { lusitana } from "@/app/ui/fonts";
import  Table  from "@/app/ui/table";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { validatedJobs } from "./lib/data";


export default function HomePage({
  searchParams,
}:{
  searchParams?: {
    query?: string;
    page?: number;
  };
  }
) {

  return (
  <div className="w-full flex-grow p-6 md:overflow-y-auto md:p-12">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>Job Seek - Charles Wang</h1>
      <h2 className={`${lusitana.className} text-1xl`}>Amount: {validatedJobs.length}</h2>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Search placeholder="Search company..." />
    </div>
      <Table query={searchParams?.query} currentPage={searchParams?.page} />
    <div className="mt-5 flex w-full justify-center">
      <Pagination query={searchParams?.query} />
    </div>
  </div>
  );
}
