import { getActivityForMonth } from '@/lib/notion';
import { MonthIncludes, StudyActivity, StudyCategory, StudyStat } from '@/lib/types';
import { sumArray } from '@/lib/utils';
import { formatISO } from 'date-fns';
import DonutChart from './DonutChart';
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
  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', logs) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', logs) },
    { category: '観る', time: getTimeForCategory('観る', logs) },
    { category: '話す', time: getTimeForCategory('話す', logs) },
    { category: '読書', time: getTimeForCategory('読書', logs) },
  ];
  return (
    <Window English='Monthly Bar Chart' Japanese='Monthly Bar Chart' width='w-96' height='h-96'>
      <DonutChart width={300} height={300} data={monthlyStats} />
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
