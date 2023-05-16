import Calendar from '@/components/Calendar';
import GameLog from '@/components/GameLog';
import LastStudied from '@/components/LastStudied';
import MonthlyStats from '@/components/MonthlyStats';
import TaskBar from '@/components/TaskBar';
import TodayNotepad from '@/components/TodayNotepad';
import WritingAlert from '@/components/WritingAlert';
import YearlyStats from '@/components/YearlyStats';

export default async function Home() {
  return (
    <>
      <div className='flex flex-row flex-wrap grow-0 gap-4 p-4'>
        {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}　
        {/* @ts-expect-error Server Component */}
        <Calendar />
        {/* @ts-expect-error Server Component */}
        <TodayNotepad />
        {/* @ts-expect-error Server Component */}
        <YearlyStats />
        {/* @ts-expect-error Server Component */}
        <WritingAlert />
        {/* @ts-expect-error Server Component */}
        <MonthlyStats />
        {/* @ts-expect-error Server Component */}
        <GameLog />
        {/* @ts-expect-error Server Component */}
        <LastStudied />
      </div>
      <div className='fixed bottom-0'>
        {/* @ts-expect-error Server Component */}
        <TaskBar />
      </div>
    </>
  );
}
