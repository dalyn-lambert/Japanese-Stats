import MonthlyDaysSpent from '@/components/MonthlyDaysSpent';
import MonthlyHeader from '@/components/MonthlyHeader';
import { getDetailsForMonth } from '@/lib/notion';

const getData = async (id: string) => {
  const data = await getDetailsForMonth(id);
  return data;
};

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div className='flex flex-row flex-wrap grow-0 p-2 gap-2'>
      <MonthlyHeader title={data.title} />
      {/* @ts-expect-error Server Component */}
      {/* <MonthlyWins wins={data.wins} />
      <MonthlySummary summary={data.summary} /> */}
      <MonthlyDaysSpent date={data.date} />
      {/* @ts-expect-error Server Component */}
      {/* <MonthlyDonutChart date={data.date} /> */}
    </div>
  );
}
