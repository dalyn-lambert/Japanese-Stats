import { getTodaysStudies } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  const activities = await getTodaysStudies();
  return activities;
};

const TodayNotepad = async () => {
  const activities = await getData();
  return (
    <Window English="Today's Studies" Japanese='今日の勉強' width='w-96' height='h-72'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm p-4 overflow-y-scroll'>
        {activities.map((activity) => (
          <div key={activity.id} className='flex flex-row text-sm pb-4 items-center'>
            <span className='pr-2 shrink-0'>{getIconForCategory(activity.category)}</span>
            <span>
              {activity.title} {activity.media && `～ ${activity.media}`}
            </span>
          </div>
        ))}
        <div>• |</div>
      </div>
    </Window>
  );
};

export default TodayNotepad;
