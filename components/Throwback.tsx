import { getThrowbackStudies } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';

const getData = async () => {
  const activities = await getThrowbackStudies();
  return activities;
};

const Throwback = async () => {
  const activities = await getData();
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[500px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>去年</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>Throwback</span>
      </div>
      <div className='bg-lt w-[500px] h-[180px] rounded-b-sm p-4 overflow-y-scroll'>
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

export default Throwback;
