import { getTodaysStudies } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async () => {
  const activities = await getTodaysStudies();
  return activities;
};

const DonutChartToday = async () => {
  const data = await getData();
  const dailyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];
  return (
    <Window English="Today's Study Time" Japanese='今日の勉強時間' width='w-60' height='h-60'>
      <DonutChart width={175} height={175} data={dailyStats} donutThickness={30} />
    </Window>
  );
};

export default DonutChartToday;
