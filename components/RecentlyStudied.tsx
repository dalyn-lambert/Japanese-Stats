import { TODAY_DB } from '@/lib/globals';
import { getStudyTimeForDate } from '@/lib/notion';
import { getTimeForCategory } from '@/lib/utils';
import { format, subDays } from 'date-fns';
import BarGraphStack, { StudyDay } from './BarGraphStack';
import Window from './Window';

const getData = async () => {
  const date = TODAY_DB;
  let data = [];
  for (let i = 0; i < 7; i++) {
    data.push(await getStudyTimeForDate(format(subDays(new Date(date), i), 'yyyy-MM-dd')));
  }
  return data;
};

const RecentlyStudied = async () => {
  let data = await getData();
  let weeklyStats: StudyDay[] = [];
  for (let i = 0; i < 7; i++) {
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
    <Window English='Recently Studied' Japanese='最近勉強したこと' width={'w-[32rem]'} height='h-[20rem]'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm'>
        <BarGraphStack width={500} height={250} data={weeklyStats} />
      </div>
    </Window>
  );
};

export default RecentlyStudied;
