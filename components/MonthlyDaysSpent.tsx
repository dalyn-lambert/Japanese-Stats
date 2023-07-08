import { MonthIncludes } from '@/lib/types';
import MonthlyCalendarColumn from './MonthlyCategoryColumn';
import Window from './Window';

const MonthlyDaysSpent = ({ date }: { date: MonthIncludes }) => {
  const duration = 31;
  const month = 6;
  const year = 2023;
  const rows = [];
  for (let i = 1; i <= duration; i++) {
    rows.push(<MonthlyCalendarColumn day={i} month={month} year={year} />);
  }
  return (
    <Window English='Days spent' Japanese='' width='w-[51rem]' height='h-72'>
      <div className='flex flex-cols gap-1.5 shrink-0'>{rows}</div>
    </Window>
  );
};

export default MonthlyDaysSpent;
