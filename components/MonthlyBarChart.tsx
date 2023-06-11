import { getActivityForMonth } from '@/lib/notion';
import { MonthIncludes, StudyActivity, StudyCategory } from '@/lib/types';
import { sumArray, toHoursAndMinutes } from '@/lib/utils';
import { formatISO } from 'date-fns';
import Window from './Window';

const getData = async (dates: MonthIncludes) => {
  const activities = await getActivityForMonth(
    formatISO(new Date(dates.date.start)),
    formatISO(new Date(dates.date.end))
  );
  return activities;
};

const MonthlyBarChart = async (dates: MonthIncludes) => {
  const logs = await getData(dates);
  const listeningTime = toHoursAndMinutes(getTimeForCategory('聴く', logs));
  const gameTime = toHoursAndMinutes(getTimeForCategory('ゲーム', logs));
  const watchingTime = toHoursAndMinutes(getTimeForCategory('観る', logs));
  const speakingTime = toHoursAndMinutes(getTimeForCategory('話す', logs));
  const readingTime = toHoursAndMinutes(getTimeForCategory('読書', logs));
  return (
    <Window English='Monthly Bar Chart' Japanese='Monthly Bar Chart' width='w-72' height='h-96'>
      <div>listening time {listeningTime}</div>
      <div>game time {gameTime}</div>
      <div>watching time {watchingTime}</div>
      <div>speaking time {speakingTime}</div>
      <div>reading time {readingTime}</div>
    </Window>
  );
};

export default MonthlyBarChart;

// function to reduce big array of logs
// takes a category and the big array
// removes everything BUT that category
// sums the numbers - calls SumArray function

function getTimeForCategory(category: StudyCategory, logs: StudyActivity[]) {
  const filteredArray = logs.filter((log) => log.category === category);
  const time = sumArray(filteredArray.map((activity) => activity.time));
  return time;
}
