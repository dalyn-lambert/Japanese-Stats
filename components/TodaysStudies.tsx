import { getTodaysStudies } from '@/lib/notion';

const getData = async () => {
  const todaysActivities = await getTodaysStudies();
  return todaysActivities;
};

const TodaysStudies = async () => {
  const todaysActivities = await getData();
  return (
    <div>
      {todaysActivities.map((activity) => (
        <>
          <div>{activity.id}</div>
          <div>{activity.title}</div>
          <div>{activity.media}</div>
          <div>{activity.category}</div>
          <div>{activity.time}</div>
          <div>-------</div>
        </>
      ))}
    </div>
  );
};

export default TodaysStudies;
