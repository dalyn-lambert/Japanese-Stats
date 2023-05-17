import { getWritingDaysForMonth } from '@/lib/notion';

import { Edit3 } from 'react-feather';
import Window from './Window';

const getData = async () => {
  const days: number = await getWritingDaysForMonth();
  return days;
};

const WritingAlert = async () => {
  const days = await getData();
  return (
    <Window English='Writing' Japanese='書く' width='w-[350px]' height='h-[175px]'>
      <div className='flex flex-row justify-between align-center'>
        <Edit3 width={18} height={18} />
        <div className='text-center'>You have spent {days} writing this month!</div>
      </div>
    </Window>
  );
};

export default WritingAlert;
