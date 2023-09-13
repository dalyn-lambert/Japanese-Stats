import LastStudied from '@/components/LastStudied';
import TodayNotepad from '@/components/TodayNotepad';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 pt-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* donut chart: 12.979s */}
      {/* <DailyDonutChart /> */}
      {/* today notepad: 7.497s */}
      {/* @ts-expect-error Server Component */}
      <TodayNotepad />
      {/* recently studied: 23.465s */}
      {/* <RecentlyStudied /> */}
      <div className='flex flex-col gap-2'>
        {/* listening: 31.067s */}
        {/* <ListeningTime /> */}
      </div>
      {/* last studied: 4.682s */}
      {/* @ts-expect-error Server Component */}
      <LastStudied />
    </div>
  );
}
