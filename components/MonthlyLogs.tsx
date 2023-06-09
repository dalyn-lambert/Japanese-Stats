import { getActivityForMonth } from '@/lib/notion';
import { formatISO } from 'date-fns';
import Window from './Window';

const getData = async (date: { date: { start: string; end: string } }) => {
  const activities = await getActivityForMonth(
    formatISO(new Date(date.date.start)),
    formatISO(new Date(date.date.end))
  );
  return activities;
};

const MonthlyLogs = async (date: { start: string; end: string }) => {
  const logs = await getData(date);
  return (
    <Window English='???' Japanese='????' width='w-72' height='h-96'>
      <div className=' overflow-y-scroll flex flex-col gap-2 p-2 border-2 shadow-inner shadow-white border-dark-gray'>
        {logs.map((log) => (
          <div key={log.id}>{log.title}</div>
        ))}
      </div>
    </Window>
  );
};

export default MonthlyLogs;
