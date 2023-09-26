import { getActivityBetweenDates } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { format, startOfWeek } from 'date-fns';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async (weekStart: Date) => {
  const start = format(new Date(weekStart), 'yyyy-MM-dd');
  const end = format(new Date(), 'yyyy-MM-dd');
  const activities = await getActivityBetweenDates(start, end);
  return activities;
};

const DonutChartCurrentWeek = async () => {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  const data = await getData(weekStart);
  const weeklyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];

  return (
    <Window English='Weekly Study Time' Japanese='今週の勉強時間' width='w-64' height='h-64'>
      <DonutChart width={175} height={175} data={weeklyStats} donutThickness={30} />
    </Window>
  );
};

export default DonutChartCurrentWeek;
