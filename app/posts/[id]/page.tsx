import MonthlyLogs from '@/components/MonthlyLogs';
import { getMonthDetails } from '@/lib/notion';

const getData = async (id: string) => {
  const data = await getMonthDetails(id);
  return data;
};

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      {data.name} <MonthlyLogs date={data.date} />
    </div>
  );
}
