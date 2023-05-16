import { getWritingDaysForMonth } from '@/lib/notion';
import Window from './Window';

const getData = async () => {
  const days: number = await getWritingDaysForMonth();
  return days;
};

const WritingAlert = async () => {
  const days = await getData();
  return (
    <Window English='Writing' Japanese='書く' width='w-[200px]' height='h-[125px]'>
      <div className='text-center'>icon {days} spent writing this month</div>
    </Window>
  );
};

export default WritingAlert;
