import { getActivityForMonth } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { format, formatISO } from 'date-fns';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async (end: string) => {
  const activities = await getActivityForMonth(formatISO(new Date(end)), formatISO(new Date()));
  return activities;
};

const PastMonthDonutChart = async () => {
  const today = new Date();
  const end = format(today, 'yyyy-MM-01');
  const data = await getData(end);
  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];

  return (
    <Window English='Monthly Donut Chart' Japanese='Monthly Donut Chart' width='w-96' height='h-96'>
      <DonutChart width={300} height={300} data={monthlyStats} donutThickness={30} />
    </Window>
  );
};

export default PastMonthDonutChart;
