import Calendar from '@/components/Calendar';
import LastStudied from '@/components/LastStudied';
import PastMonthDonutChart from '@/components/PastMonthDonutChart';
import DailyDonutChart from '@/components/TodayDonutChart';
import TodayNotepad from '@/components/TodayNotepad';
import Vocab from '@/components/Vocab';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 p-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <Calendar /> {/* Calendar: 10.772s */}
      {/* @ts-expect-error Server Component */}
      <DailyDonutChart /> {/*donut chart: 12.979s */}
      {/* @ts-expect-error Server Component */}
      <TodayNotepad /> {/* today notepad: 7.497s */}
      {/* @ts-expect-error Server Component */}
      <Vocab />
      {/* @ts-expect-error Server Component */}
      <LastStudied /> {/* last studied: 4.682s */}
      {/* @ts-expect-error Server Component */}
      <PastMonthDonutChart />
    </div>
  );
}
