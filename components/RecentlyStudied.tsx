import { TODAY_DB } from '@/lib/globals';
import { getStudyTimeForDate } from '@/lib/notion';
import { getTimeForCategory } from '@/lib/utils';
import BarGraphStack, { StudyDay } from './BarGraphStack';
import Window from './Window';

const getData = async () => {
  const data = getStudyTimeForDate(TODAY_DB);
  return data;
};

const RecentlyStudied = async () => {
  const data = await getData();
  const weeklyStats: StudyDay[] = [
    {
      date: TODAY_DB,
      聴く: String(getTimeForCategory('聴く', data)),
      ゲーム: String(getTimeForCategory('ゲーム', data)),
      観る: String(getTimeForCategory('観る', data)),
      話す: String(getTimeForCategory('話す', data)),
      読書: String(getTimeForCategory('読書', data)),
    },
  ];

  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-[20.25rem]'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm'>
        <BarGraphStack width={500} height={250} data={weeklyStats} />
      </div>
    </Window>
  );
};

export default RecentlyStudied;
