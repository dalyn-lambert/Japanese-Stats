import { TODAY_DB } from '@/lib/globals';
import { getStudyTimeForDate } from '@/lib/notion';
import { getTimeForCategory } from '@/lib/utils';
import { format, subDays } from 'date-fns';
import BarGraphStack, { StudyDay } from './BarGraphStack';
import Window from './Window';

const getData = async () => {
  const date = TODAY_DB;
  let data = [];
  // date-fns will round 0 to 1 so need to do the first outside the loop
  data.push(await getStudyTimeForDate(date));
  for (let i = 0; i < 6; i++) {
    data.push(await getStudyTimeForDate(format(subDays(new Date(date), i), 'yyyy-MM-dd')));
  }
  return data;
};

const RecentlyStudied = async () => {
  let data = await getData();
  console.log(data);
  let weeklyStats: StudyDay[] = [];
  // date-fns will round 0 to 1 so need to do the first outside the loop
  weeklyStats.push({
    date: TODAY_DB,
    聴く: getTimeForCategory('聴く', data[0]),
    読書: getTimeForCategory('読書', data[0]),
    観る: getTimeForCategory('観る', data[0]),
    ゲーム: getTimeForCategory('ゲーム', data[0]),
    話す: getTimeForCategory('話す', data[0]),
  });
  for (let i = 0; i < 6; i++) {
    weeklyStats.push({
      date: format(subDays(new Date(TODAY_DB), i), 'yyyy-MM-dd'),
      聴く: getTimeForCategory('聴く', data[i]),
      読書: getTimeForCategory('読書', data[i]),
      観る: getTimeForCategory('観る', data[i]),
      ゲーム: getTimeForCategory('ゲーム', data[i]),
      話す: getTimeForCategory('話す', data[i]),
    });
  }

  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-[20.25rem]'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm'>
        <BarGraphStack width={500} height={250} data={weeklyStats} />
      </div>
    </Window>
  );
};

export default RecentlyStudied;
