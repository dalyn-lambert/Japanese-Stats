import { getActivityBetweenDates } from '@/lib/notion';
import { MonthIncludes, StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { formatISO } from 'date-fns';
import DonutChart from './DonutChart';

const getTime = async (date: MonthIncludes) => {
  const activities = await getActivityBetweenDates(formatISO(new Date(date.start)), formatISO(new Date(date.end)));
  return activities;
};

const PostHeader = async ({ title, date }: { title: string; date: MonthIncludes }) => {
  const data = await getTime(date);

  const monthlyStats: StudyStat[] = [
    { category: '聴く', time: getTimeForCategory('聴く', data) },
    { category: '読書', time: getTimeForCategory('読書', data) },
    { category: '観る', time: getTimeForCategory('観る', data) },
    { category: 'ゲーム', time: getTimeForCategory('ゲーム', data) },
    { category: '話す', time: getTimeForCategory('話す', data) },
  ];
  return (
    <div className='group flex flex-row gap-8 justify-center items-center'>
      <DonutChart width={150} height={150} data={monthlyStats} donutThickness={10} />
      <div className='flex flex-col gap-2'>
        <div className='text-lg'>{title}</div>
        <button className='bg-gradient-1 group-hover:bg-gradient-2 text-white rounded-sm'>読む</button>
      </div>
    </div>
  );
};

export default PostHeader;
