import { starIcon } from '@/lib/icons';
import { getStudyTimeForDate } from '@/lib/notion';
import { CalendarColumnProps, StudyCategory } from '@/lib/types';
import { sumArray, toHoursAndMinutes } from '@/lib/utils';
import CalendarBubble from './CalendarBubble';

const getData = async (date: string) => {
  const activities = await getStudyTimeForDate(date);
  return activities;
};

async function CalendarColumn(props: CalendarColumnProps) {
  const activities = await getData(props.dateEng);
  const totalTimeForDay = sumArray(activities.map((activity) => activity.time));
  const categories: StudyCategory[] = ['聴く', '読書', '観る', 'ゲーム', '話す'];
  return (
    <div className='flex flex-col gap-2 items-center text-center'>
      <div className='text-2xl text-center pt-1 border-b-2 border-dark-gray pb-1'>{props.dateJP}</div>
      {categories.map((category) => (
        /* @ts-expect-error Server Component */
        <CalendarBubble key={category} date={props.dateEng} category={category} />
      ))}

      <div className='flex flex-col gap-2'>
        <div
          className={`w-32 h-7 py-1 px-2 flex flex-row items-center justify-between shrink-0 rounded-md text-sm text-white 
        ${totalTimeForDay > 0 ? `bg-mid-gray` : `bg-mid-gray`}`}
        >
          <span className={`${totalTimeForDay > 0 ? `fill-amber-400` : `fill-dark-gray`}`}>{starIcon}</span>
          <span className='text-black'>{totalTimeForDay > 0 && `${toHoursAndMinutes(totalTimeForDay)}`}</span>
        </div>
      </div>
    </div>
  );
}

export default CalendarColumn;
