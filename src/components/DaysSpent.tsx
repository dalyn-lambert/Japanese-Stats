import { MonthIncludes } from '@/lib/types';
import { differenceInDays, getMonth, getYear } from 'date-fns';
import MonthlyCalendarColumn from './MonthlyCategoryColumn';
import Window from './Window';

const DaysSpent = ({ date }: { date: MonthIncludes }) => {
  const daysInMonth = Math.abs(differenceInDays(new Date(date.start), new Date(date.end))) + 1;
  const month = getMonth(new Date(date.end)) + 1; // months are 0 indexed
  const year = getYear(new Date(date.end));
  const rows = [];
  for (let i = 1; i <= daysInMonth; i++) {
    rows.push(
      /* @ts-expect-error Server Component */
      <MonthlyCalendarColumn day={i} month={month} year={year} />
    );
  }
  return (
    <Window English='Days spent' Japanese='' width='w-[51rem]' height='h-80'>
      <div className='flex flex-cols gap-1.5 shrink-0'>{rows}</div>
    </Window>
  );
};

export default DaysSpent;
