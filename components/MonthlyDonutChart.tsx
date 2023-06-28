import { getActivityForMonth } from '@/lib/notion';
import { MonthIncludes, StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
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

const MonthlyDonutChart = async (dates: MonthIncludes) => {
  const data = await getData(dates);
  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];
  return (
    <Window English='Monthly Bar Chart' Japanese='Monthly Bar Chart' width='w-96' height='h-96'>
      <DonutChart width={300} height={300} data={monthlyStats} donutThickness={10} />
    </Window>
  );
};

export default MonthlyDonutChart;
