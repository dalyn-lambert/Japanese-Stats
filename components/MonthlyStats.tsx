import { getMonthlyStats } from '@/lib/notion';
import { toHoursAndMinutes } from '@/lib/utils';
import WindowTitle from './WindowTitle';

const getData = async () => {
  const stats = await getMonthlyStats();
  return stats;
};

const MonthlyStats = async () => {
  const stats = await getData();
  return (
    <div className='w-[750px] group drop-shadow-lg shadow-cyan-200'>
      <WindowTitle English='Study Time by Month' Japanese='月の勉強' />
      <div className=' h-[500px] bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4 overflow-y-scroll'>
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
      </div>
    </div>
  );
};

export default MonthlyStats;
