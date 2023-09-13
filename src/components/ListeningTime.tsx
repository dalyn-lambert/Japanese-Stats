import { getActivityForCategoryAndTimePeriod } from '@/lib/notion';
import { buildTimeArray, sumArray, toHoursAndMinutes } from '@/lib/utils';
import { formatISO } from 'date-fns';
import Window from './Window';

const getData = async () => {
  const activities = await getActivityForCategoryAndTimePeriod(
    formatISO(new Date('2023-01-01')),
    formatISO(new Date()),
    '聴く'
  );
  return activities;
};

// make start date and end data props to adapt this to work for the month too
const ListeningTime = async () => {
  const listening = await getData();
  const timeArray = listening.map(buildTimeArray);
  const totalTime = toHoursAndMinutes(sumArray(timeArray));
  return (
    <Window English='Listening' Japanese='聴く' width='w-72' height='h-48'>
      <div className='bold text-lg'>{totalTime}</div>
      <div className='bg-slate-100 overflow-y-scroll flex flex-col gap-2 p-2 border-2 shadow-inner shadow-white border-dark-gray'>
        Entries Go Here?
      </div>
    </Window>
  );
};

export default ListeningTime;
