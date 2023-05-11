import { getMonthlyStats } from '@/lib/notion';
import { toHoursAndMinutes } from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  const stats = await getMonthlyStats();
  return stats;
};

const MonthlyStats = async () => {
  const stats = await getData();
  return (
    <Window English='Study Time by Month' Japanese='月の勉強' width={'w-[750px]'} height={'h-[500px]'}>
      {stats.map((month) => (
        <div key={month.id} className='flex flex-col text-base pb-4'>
          <span>{month.month}</span>
          <span>listening: {toHoursAndMinutes(month.listening)}</span>
          <span>watching: {toHoursAndMinutes(month.watching)}</span>
          <span>speaking: {toHoursAndMinutes(month.speaking)}</span>
          <span>reading: {toHoursAndMinutes(month.reading)}</span>
          <span>games: {toHoursAndMinutes(month.games)}</span>
        </div>
      ))}
    </Window>
  );
};

export default MonthlyStats;
