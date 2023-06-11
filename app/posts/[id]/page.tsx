import MonthlyBarChart from '@/components/MonthlyBarChart';
import { getMonthDetails } from '@/lib/notion';

const getData = async (id: string) => {
  const data = await getMonthDetails(id);
  return data;
};

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div className='flex flex-row flex-wrap grow-0 p-2 gap-2'>
      {/* <MonthlyLogs date={data.date} /> */}
      {data.name}
      {/* @ts-expect-error Server Component */}
      <MonthlyBarChart date={data.date} />
    </div>
  );
}
