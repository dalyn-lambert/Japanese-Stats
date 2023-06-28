import { getActivityForYear } from '@/lib/notion';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory, sumArray } from '@/lib/utils';
import { formatISO } from 'date-fns';
import DonutChart from './DonutChart';
import Window from './Window';

const getData = async () => {
  const activities = await getActivityForYear(formatISO(new Date('2023-01-01')), formatISO(new Date()));
  return activities;
};

const YearlyStats = async () => {
  const data = await getData();
  const yearlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
  ];
  // const totalTime = sumArray(yearlyStats);
  return (
    <Window English='Study Time by Year' Japanese='年の勉強' width='w-96' height='h-96'>
      <DonutChart width={300} height={300} data={yearlyStats} />
    </Window>
  );
};

export default YearlyStats;
