import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';


export default function InterviewStatus({ status }: { status: boolean }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': !status,
          'bg-green-500 text-white': status,
        },
      )}
    >
      {status ? (
        <>
        <div className="md:hidden">Interviewed</div>
        <div className="hidden md:block">Yes</div>
        
        <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) :  
        <>
        <div className="md:hidden">No Interview</div>
        <div className="hidden md:block ">No</div>
          <XMarkIcon className="ml-1 w-4 text-gray" />
      </>}
    
    </span>
  );
}


