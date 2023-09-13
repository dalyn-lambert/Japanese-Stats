import LastStudied from '@/components/LastStudied';
import ListeningTime from '@/components/ListeningTime';
import RecentlyStudied from '@/components/RecentlyStudied';
import DailyDonutChart from '@/components/TodayDonutChart';
import TodayNotepad from '@/components/TodayNotepad';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 pt-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <DailyDonutChart />
      {/* @ts-expect-error Server Component */}
      <TodayNotepad />
      {/* @ts-expect-error Server Component */}
      <RecentlyStudied />
      <div className='flex flex-col gap-2'>
        {/* @ts-expect-error Server Component */}
        <ListeningTime />
      </div>
      {/* @ts-expect-error Server Component */}
      <LastStudied />
    </div>
  );
}
