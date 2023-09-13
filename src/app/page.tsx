import LastStudied from '@/components/LastStudied';
import DailyDonutChart from '@/components/TodayDonutChart';
import TodayNotepad from '@/components/TodayNotepad';

export const metadata = {
  title: 'Home',
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='flex flex-row flex-wrap gap-2 pt-2'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <DailyDonutChart /> {/*donut chart: 12.979s */}
      {/* @ts-expect-error Server Component */}
      <TodayNotepad /> {/* today notepad: 7.497s */}
      {/* <RecentlyStudied /> recently studied: 23.465s */}
      <div className='flex flex-col gap-2'>
        {/* <ListeningTime /> */} {/* listening: 31.067s */}
      </div>
      {/* @ts-expect-error Server Component */}
      <LastStudied /> {/* last studied: 4.682s */}
    </div>
  );
}
