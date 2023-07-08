import { StudyCategory } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';

const MonthlyCalendarColumn = ({ day }: { day: number }) => {
  const categories: StudyCategory[] = ['聴く', '読書', '観る', 'ゲーム', '話す'];
  return (
    <div className='shrink-0 flex flex-col gap-4'>
      {categories.map((category, index) => (
        <div key={index}>{getIconForCategory(category)}</div>
      ))}
    </div>
  );
};

export default MonthlyCalendarColumn;
