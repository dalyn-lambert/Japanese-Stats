import TodaysStudies from '@/components/TodaysStudies';

export default async function Home() {
  // {format(new Date(), 'MM/dd/yyyy')}
  const today = '2023-05-03';
  return (
    <div className=''>
      <div className=''>Study Activity for {today}</div>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <TodaysStudies />
    </div>
  );
}
