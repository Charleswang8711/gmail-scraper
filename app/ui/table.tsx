
import { getFilteredJobs } from '../lib/data';
import { formatDateToLocal } from '../lib/utils';
import InterviewStatus from './status';




const JobsTable = ({query, currentPage}:{
  query?: string,
  currentPage?: number
}) => {

  const jobs = getFilteredJobs(query, currentPage);
  
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {jobs?.map((job) => (
              <div
                key={job.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{job.companyName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                  <InterviewStatus status={job.interviewed} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {job.role}
                    </p>
                    <p>{formatDateToLocal(job.date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Company
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Location
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Role
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Interviewed
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {jobs?.map((job) => (
                <tr
                  key={job.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{job.companyName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {job.location}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {job.role}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(job.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InterviewStatus status={job.interviewed} />  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobsTable