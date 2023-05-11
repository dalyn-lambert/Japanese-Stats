import { getTodaysStudies } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import WindowTitle from './WindowTitle';

const getData = async () => {
  const activities = await getTodaysStudies();
  return activities;
};

const TodaysStudies = async () => {
  const activities = await getData();
  return (
    <div className='w-[500px] group drop-shadow-lg shadow-cyan-200 bg-windows-gray p-2 rounded-sm flex flex-col gap-2'>
      <WindowTitle English="Today's Studies" Japanese='今日の勉強 - ノート' />
      <div className='h-[180px] bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4 overflow-y-scroll'>
        {activities.map((activity) => (
          <div key={activity.id} className='flex flex-row text-base pb-4'>
            <div className='pr-2 shrink-0'>{getIconForCategory(activity.category)}</div>
            <div>
              {activity.title} {activity.media && `~ ${activity.media}`}
            </div>
          </div>
        ))}
        <div>• |</div>
      </div>
    </div>
  );
};

export default TodaysStudies;
