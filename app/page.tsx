import Calendar from '@/components/Calendar';
import GameLog from '@/components/GameLog';
import LastStudied from '@/components/LastStudied';
import MonthlyStats from '@/components/MonthlyStats';
import TodayNotepad from '@/components/TodayNotepad';

export default async function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 p-2 justify-center'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <Calendar />
      {/* @ts-expect-error Server Component */}
      <TodayNotepad />
      {/* @ts-expect-error Server Component */}
      <MonthlyStats />

      {/* <YearlyStats /> */}
      {/* @ts-expect-error Server Component */}
      <LastStudied />
      {/* @ts-expect-error Server Component */}
      <GameLog />
    </div>
  );
}
