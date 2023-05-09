import DateHeader from '@/components/DateHeader';
import TaskBar from '@/components/TaskBar';
import Throwback from '@/components/Throwback';
import TodaysStudies from '@/components/TodaysStudies';

export default async function Home() {
  return (
    <>
      <div className='flex flex-row gap-4 pt-4'>
        {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
        {/* @ts-expect-error Server Component */}
        <DateHeader />
        {/* @ts-expect-error Server Component */}
        <TodaysStudies />
        {/* @ts-expect-error Server Component */}
        <Throwback />
      </div>
      <div className='fixed bottom-0'>
        {/* @ts-expect-error Server Component */}
        <TaskBar />
      </div>
    </>
  );
}
