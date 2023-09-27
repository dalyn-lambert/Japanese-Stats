import { getActivityForDateAndCategory } from '@/lib/notion';
import { CalendarBubbleProps, StudyCategory } from '@/lib/types';
import { getColorForCategory, getIconForCategory, sumArray, toHoursAndMinutes } from '@/lib/utils';

const getData = async (date: string, category: StudyCategory) => {
  const activities = await getActivityForDateAndCategory(date, category);
  return activities;
};

async function CalendarBubble(props: CalendarBubbleProps) {
  const activities = await getData(props.date, props.category);
  const totalTime = sumArray(activities.map((activity) => activity.time));
  return (
    <div className='flex flex-col gap-2'>
      <div
        className={`w-32 h-7 py-1 px-2 flex flex-row items-center justify-between shrink-0 rounded-md text-sm text-white 
        bg-mid-gray`}
      >
        <span className={`${totalTime > 0 ? `fill-${getColorForCategory(props.category)}` : `fill-dark-gray`}`}>
          {getIconForCategory(props.category)}
        </span>
        <span>{totalTime > 0 && `${toHoursAndMinutes(totalTime)}`}</span>
      </div>
    </div>
  );
}

export default CalendarBubble;
