import { getActivityBetweenDates } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { formatISO, startOfQuarter } from 'date-fns';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async (firstOfQuarter: Date) => {
  const activities = await getActivityBetweenDates(formatISO(firstOfQuarter), formatISO(new Date()));
  return activities;
};

const DonutChartCurrentQuarter = async () => {
  const today = new Date();
  const firstOfQuarter = startOfQuarter(today);
  const data = await getData(firstOfQuarter);
  const quarterlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];

  return (
    <Window English='Quarterly Study Time' Japanese='今四半期の勉強時間' width='w-64' height='h-64'>
      <DonutChart width={175} height={175} data={quarterlyStats} donutThickness={30} />
    </Window>
  );
};

export default DonutChartCurrentQuarter;
