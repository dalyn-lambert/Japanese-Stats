import { TODAY_JAPANESE } from '@/lib/globals';

const DateHeader = async () => {
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[200px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>日付</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>Date</span>
      </div>
      <div className='bg-lt w-[200px] h-[75px] rounded-b-sm text-4xl'>
        <div className='text-center pt-2'>{TODAY_JAPANESE}</div>
      </div>
    </div>
  );
};

export default DateHeader;
