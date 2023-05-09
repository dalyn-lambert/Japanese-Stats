import { getTodaysStudies } from '@/lib/notion';

const getData = async () => {
  const activities = await getTodaysStudies();
  return activities;
};

const TodaysStudies = async () => {
  const activities = await getData();
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[400px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>今日の没入</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{"Today's Immersion"}</span>
      </div>
      <div className='bg-lt w-[400px] h-[180px] rounded-b-sm pl-4 overflow-y-scroll'>
        {activities.map((activity) => (
          <>
            <div>
              • {activity.media} ~ {activity.title}
            </div>
          </>
        ))}
        <div>• |</div>
      </div>
    </div>
  );
};

export default TodaysStudies;
