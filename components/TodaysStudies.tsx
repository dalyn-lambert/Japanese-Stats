import { getTodaysStudies } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  const activities = await getTodaysStudies();
  return activities;
};

const TodaysStudies = async () => {
  const activities = await getData();
  return (
    <Window English="Today's Studies" Japanese='今日の勉強 - ノート'>
      {activities.map((activity) => (
        <div key={activity.id} className='flex flex-row text-base pb-4'>
          <div className='pr-2 shrink-0'>{getIconForCategory(activity.category)}</div>
          <div>
            {activity.title} {activity.media && `~ ${activity.media}`}
          </div>
        </div>
      ))}
      <div>• |</div>
    </Window>
  );
};

export default TodaysStudies;
