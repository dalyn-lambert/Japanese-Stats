import { getThrowbackStudies } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  const activities = await getThrowbackStudies();
  return activities;
};

const Throwback = async () => {
  const activities = await getData();
  return (
    <Window English='Throwback' Japanese='去年' width={'w-[500px]'} height={'h-[300px]'}>
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

export default Throwback;
