import { getWritingDaysForMonth } from '@/lib/notion';

import { AlertTriangle } from 'react-feather';
import Window from './Window';

const getData = async () => {
  const days: number = await getWritingDaysForMonth();
  return days;
};

const WritingAlert = async () => {
  const days = await getData();
  return (
    <Window English='Writing' Japanese='書く' width='w-80' height='h-40'>
      <div className='flex flex-col gap-6 pt-4 items-center'>
        <div className='flex flex-row gap-2 justify-center'>
          <AlertTriangle width={24} height={24} />
          <div className='text-center'>You have written {days} days this month!</div>
        </div>
        <button
          type='button'
          disabled={true}
          className='shadow-inset shadow-slate-100 text-slate-100 bg-dark-gray w-max p-2 rounded-md'
        >
          頑張って
        </button>
      </div>
    </Window>
  );
};

export default WritingAlert;
