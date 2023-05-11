import { getWritingDaysForMonth } from '@/lib/notion';
import WindowTitle from './WindowTitle';

const getData = async () => {
  const days: number = await getWritingDaysForMonth();
  return days;
};

const WritingCalulator = async () => {
  const days = await getData();
  return (
    <div className='w-[200px] group drop-shadow-lg shadow-cyan-200'>
      <WindowTitle English='Writing' Japanese='書く' />
      <div className='h-[75px] bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4'>
        <div className='text-center'>{days} spent writing this month</div>
      </div>
    </div>
  );
};

export default WritingCalulator;
