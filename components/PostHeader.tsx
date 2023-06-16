import { getActivityForMonth, getMonthDetails } from '@/lib/notion';
import { ProgressReport, StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { formatISO } from 'date-fns';
import DonutChart from './DonutChart';

const getTime = async (dates: { start: string; end: string }) => {
  const activities = await getActivityForMonth(formatISO(new Date(dates.start)), formatISO(new Date(dates.end)));
  return activities;
};

const getDates = async (id: string) => {
  const data = await getMonthDetails(id);
  return data;
};

const PostHeader = async (props: ProgressReport) => {
  const dates = await getDates(props.id);
  const data = await getTime(dates.date);

  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
  ];
  return (
    <div className='group flex flex-row gap-8 justify-center items-center'>
      <DonutChart width={150} height={150} data={monthlyStats} />
      <div className='flex flex-col gap-2'>
        <div className='text-lg'>{props.name}</div>
        <button className='bg-gradient-1 group-hover:bg-gradient-2 text-white rounded-sm'>読む</button>
      </div>
    </div>
  );
};

export default PostHeader;
