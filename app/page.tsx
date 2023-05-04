import { getTodaysStudies } from '@/lib/notion';
import { format } from 'date-fns';

export default async function Home() {
  const data = await getTodaysStudies();
  console.log(data);
  return (
    <div className=''>
      <div>Today is {format(new Date(), 'MM/dd/yyyy')}</div>
    </div>
  );
}
