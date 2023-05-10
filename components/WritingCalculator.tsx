import { getWritingDaysForMonth } from '@/lib/notion';

const getData = async () => {
  const days: number = await getWritingDaysForMonth();
  return days;
};

const WritingCalulator = async () => {
  const days = await getData();
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[200px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>書く日</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{"Day's Spent Writing"}</span>
      </div>
      <div className='bg-lt w-[200px] h-[75px] rounded-b-sm'>
        <div className='text-center pt-2'>{days} spent writing this month</div>
      </div>
    </div>
  );
};

export default WritingCalulator;
