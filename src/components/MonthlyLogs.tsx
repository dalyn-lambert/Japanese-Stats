import { getActivityBetweenDates } from '@/lib/notion';
import { MonthIncludes } from '@/lib/types';
import { formatISO } from 'date-fns';
import Window from './Window';

const getData = async (dates: MonthIncludes) => {
  const activities = await getActivityBetweenDates(formatISO(new Date(dates.start)), formatISO(new Date(dates.end)));
  return activities;
};

const MonthlyLogs = async (dates: MonthIncludes) => {
  const logs = await getData(dates);
  return (
    <Window English='Monthly Logs' Japanese='Monthly Logs' width='w-72' height='h-96'>
      <div className=' overflow-y-scroll flex flex-col gap-2 p-2 border-2 shadow-inner shadow-white border-dark-gray'>
        {logs.map((log) => (
          <div key={log.id}>{log.title}</div>
        ))}
      </div>
    </Window>
  );
};

export default MonthlyLogs;
