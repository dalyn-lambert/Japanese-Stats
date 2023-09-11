import { getStudyTimeForDate } from '@/lib/notion';
import { StudyCategory } from '@/lib/types';
import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';
import MonthlyCalendarIcon from './MonthlyCalendarIcon';

const getData = async (date: string) => {
  const data = await getStudyTimeForDate(date);
  return data;
};

const MonthlyCalendarColumn = async ({ day, month, year }: { day: number; year: number; month: number }) => {
  const categories: StudyCategory[] = ['聴く', '読書', '観る', 'ゲーム', '話す'];
  const activities = await getData(format(new Date(year, month - 1, day), 'yyyy-MM-dd'));
  const categoriesForDay = activities.map((activity) => {
    return activity.category;
  });
  const dayOfWeek = format(new Date(year, month, day), 'EE', { locale: ja });
  return (
    <div className='shrink-0 flex flex-col gap-5'>
      <div className='shrink-0 flex flex-col gap-1'>
        <span>{dayOfWeek}</span>
        <span>{day}</span>
      </div>
      {categories.map((category, index) => (
        <MonthlyCalendarIcon key={index} category={category} categoriesForDay={categoriesForDay} />
      ))}
    </div>
  );
};

export default MonthlyCalendarColumn;
