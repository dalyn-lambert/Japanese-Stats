import { getTodaysStudies } from '@/lib/notion';

const getData = async () => {
  const todaysActivities = await getTodaysStudies();
  return todaysActivities;
};

const TodaysStudies = async () => {
  const todaysActivities = await getData();
  return (
    <div className=''>
      <div className='bg-indigo-400 w-[400px] h-[25px] rounded-t-md pl-4 '>今日の勉強</div>
      <div className='bg-indigo-200 w-[400px] h-[180px] rounded-b-md pl-4'>
        {todaysActivities.map((activity) => (
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
