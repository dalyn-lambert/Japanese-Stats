import DonutChartCurrentMonth from '@/components/DonutChartCurrentMonth';
import DonutChartCurrentQuarter from '@/components/DonutChartCurrentQuarter';
import DonutChartCurrentWeek from '@/components/DonutChartCurrentWeek';
import DonutChartToday from '@/components/DonutChartToday';
import LastStudied from '@/components/LastStudied';
import TodayNotepad from '@/components/TodayNotepad';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='flex flex-cols-2 gap-2 p-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      <div className='grid grid-cols-2 gap-2 content-center'>
        {/* @ts-expect-error Server Component */}
        <DonutChartToday />
        {/* @ts-expect-error Server Component */}
        <DonutChartCurrentWeek />
        {/* @ts-expect-error Server Component */}
        <DonutChartCurrentMonth />
        {/* @ts-expect-error Server Component */}
        <DonutChartCurrentQuarter />
      </div>
      <div className='grid grid-cols-1 gap-2 justify-items-center content-center'>
        {/* @ts-expect-error Server Component */}
        <TodayNotepad />
        {/* @ts-expect-error Server Component */}
        <LastStudied />
      </div>
    </div>
  );
}
