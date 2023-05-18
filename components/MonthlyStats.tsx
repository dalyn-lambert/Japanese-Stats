import { getMonthlyStats } from '@/lib/notion';
import Window from './Window';

const getData = async () => {
  const stats = await getMonthlyStats();
  return stats;
};

const MonthlyStats = async () => {
  const stats = await getData();
  return (
    <Window English='Study Time by Month' Japanese='月の勉強' width={'w-[650px]'} height={'h-[400px]'}>
      <div>someday a grap</div>
    </Window>
  );
};

export default MonthlyStats;
