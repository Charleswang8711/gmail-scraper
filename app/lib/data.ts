import { ITEM_PER_PAGE } from "./constants";

 type Job = {
  id: string;
  companyName: string;
  location: string;
  role: string,
  interviewed: boolean,
  date: string,
}

 const jobs: Array<Job> = [
  {
    id: '1',
    companyName: 'Hexagon Mining',
    location: 'Perth',
    role: 'software developer',
    interviewed: true,
    date: '3/12/2023',
  },
  {
    id: '2',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '3',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '4',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '5',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '6',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '7',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '8',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '9',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '10',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '11',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '12',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },
  {
    id: '12',
    companyName: 'Prote',
    location: 'Perth',
    role: 'software developer',
    interviewed: false,
    date: '4/12/2023',
  },

]

export const getFilteredJobs = (query?: string, page?: number): Array<Job> => {

  const search = query || '';
  const currentPage = Number(page) || 1;

  const searchFilteredData =  jobs.filter((job) => {
    return job.companyName.toLowerCase().includes(search.toLowerCase());
  });

  const start = (currentPage - 1) * ITEM_PER_PAGE;
  const end = currentPage * ITEM_PER_PAGE;

  const paginatedData = searchFilteredData.slice(start, end);

  return paginatedData;
}

export const getTotalPages = (query?: string): number => {

  const search = query || '';

  const searchFilteredData =  jobs.filter((job) => {
    return job.companyName.toLowerCase().includes(search.toLowerCase());
  });

  return Math.ceil(searchFilteredData.length / ITEM_PER_PAGE);
}