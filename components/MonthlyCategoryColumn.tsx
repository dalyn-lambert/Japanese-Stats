import { getStudyTimeForDate } from '@/lib/notion';
import { StudyCategory } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';

const getData = async (date: string) => {
  const activities = await getStudyTimeForDate(date);
  return activities;
};

const MonthlyCalendarColumn = async ({ day, month, year }: { day: number; year: number; month: number }) => {
  const categories: StudyCategory[] = ['聴く', '読書', '観る', 'ゲーム', '話す'];
  const data = await getData(new Date(year, month - 1, day).toISOString());
  return (
    <div className='shrink-0 flex flex-col gap-4'>
      {categories.map((category, index) => (
        <div key={index}>{getIconForCategory(category)}</div>
      ))}
    </div>
  );
};

export default MonthlyCalendarColumn;
