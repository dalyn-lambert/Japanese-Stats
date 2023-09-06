import { TODAY_DB } from '@/lib/globals';
import { getStudyTimeForDate } from '@/lib/notion';
import { getTimeForCategory } from '@/lib/utils';
import { format, subDays } from 'date-fns';
import BarGraphStack, { StudyDay } from './BarGraphStack';
import Window from './Window';

const getData = async (date: string) => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    data.push(await getStudyTimeForDate(format(subDays(new Date(date), i), 'yyyy-MM-dd')));
  }
  return data;
};

const RecentlyStudied = async () => {
  let date = TODAY_DB;
  const data = await getData(date);
  let weeklyStats: StudyDay[] = [];
  for (let i = 0; i < 7; i++) {
    date = format(subDays(new Date(date), i), 'yyyy-MM-dd');
    weeklyStats.push({
      date: date,
      話す: getTimeForCategory('話す', data[i]),
      聴く: getTimeForCategory('聴く', data[i]),
      読書: getTimeForCategory('読書', data[i]),
      ゲーム: getTimeForCategory('ゲーム', data[i]),
      観る: getTimeForCategory('観る', data[i]),
    });
  }

  console.log(weeklyStats);

  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-[20.25rem]'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm'>
        <BarGraphStack width={500} height={250} data={weeklyStats} />
      </div>
    </Window>
  );
};

export default RecentlyStudied;
