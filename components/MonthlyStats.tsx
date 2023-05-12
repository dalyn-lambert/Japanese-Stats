import { getMonthlyStats } from '@/lib/notion';
import Window from './Window';

const getData = async () => {
  const stats = await getMonthlyStats();
  return stats;
};

const MonthlyStats = async () => {
  const stats = await getData();
  return (
    <Window English='Study Time by Month' Japanese='月の勉強' width={'w-[750px]'} height={'h-[500px]'}>
      <div>someday a graph</div>
    </Window>
  );
};

export default MonthlyStats;
