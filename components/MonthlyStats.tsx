import { getMonthlyStats } from '@/lib/notion';
import { toHoursAndMinutes } from '@/lib/utils';

const getData = async () => {
  const stats = await getMonthlyStats();
  return stats;
};

const MonthlyStats = async () => {
  const stats = await getData();
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[750px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>月の勉強</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>Study Time by Month</span>
      </div>
      <div className='bg-lt w-[750px] h-[500px] rounded-b-sm p-4 overflow-y-scroll'>
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
