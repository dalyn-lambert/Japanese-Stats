import DateHeader from '@/components/DateHeader';
import LastStudied from '@/components/LastStudied';
import MonthlyStats from '@/components/MonthlyStats';
import TaskBar from '@/components/TaskBar';
import Throwback from '@/components/Throwback';
import TodaysStudies from '@/components/TodaysStudies';
import WritingCalulator from '@/components/WritingCalculator';

export default async function Home() {
  return (
    <>
      <div className='flex flex-row flex-wrap gap-4 p-4'>
        {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
        {/* @ts-expect-error Server Component */}
        <DateHeader />
        {/* @ts-expect-error Server Component */}
        <TodaysStudies />
        {/* @ts-expect-error Server Component */}
        <Throwback />
        <div className='flex flex-col gap-4'>
          {/* @ts-expect-error Server Component */}
          <LastStudied />
          {/* @ts-expect-error Server Component */}
          <WritingCalulator />
        </div>
        {/* @ts-expect-error Server Component */}
        <MonthlyStats />
      </div>
      <div className='fixed bottom-0'>
        {/* @ts-expect-error Server Component */}
        <TaskBar />
      </div>
    </>
  );
}
