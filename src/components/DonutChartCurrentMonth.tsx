import { getActivityBetweenDates } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { format, formatISO } from 'date-fns';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async (firstOfMonth: string) => {
  const activities = await getActivityBetweenDates(formatISO(new Date(firstOfMonth)), formatISO(new Date()));
  return activities;
};

const DonutChartCurrentMonth = async () => {
  const today = new Date();
  const firstOfMonth = format(today, 'yyyy-MM-01');
  const data = await getData(firstOfMonth);
  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];

  return (
    <Window English='Monthly Study Time' Japanese='今月の勉強時間' width='w-64' height='h-64'>
      <DonutChart width={175} height={175} data={monthlyStats} donutThickness={30} />
    </Window>
  );
};

export default DonutChartCurrentMonth;
