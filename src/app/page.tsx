import LastStudied from '@/components/LastStudied';
import MonthlyStats from '@/components/MonthlyStats';
import RecentlyStudied from '@/components/RecentlyStudied';
import DailyDonutChart from '@/components/TodayDonutChart';
import TodayNotepad from '@/components/TodayNotepad';
import YearlyStats from '@/components/YearlyStats';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 pt-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <TodayNotepad />
      {/* @ts-expect-error Server Component */}
      <DailyDonutChart />
      {/* @ts-expect-error Server Component */}
      <RecentlyStudied />
      {/* @ts-expect-error Server Component */}
      <YearlyStats />
      {/* @ts-expect-error Server Component */}
      <LastStudied />
      {/* @ts-expect-error Server Component */}
      <MonthlyStats />
    </div>
  );
}
