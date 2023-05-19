import { CalendarColumnProps, StudyCategory } from '@/lib/types';
import CalendarBubble from './CalendarBubble';

function CalendarColumn(props: CalendarColumnProps) {
  const categories: StudyCategory[] = ['聴く', '読書', '観る', 'ゲーム', '話す'];
  return (
    <div className='flex flex-col gap-2 items-center text-center'>
      <div className='text-2xl text-center pt-1 border-b-2 border-dark-gray pb-1'>{props.dateJP}</div>

      {categories.map((category) => (
        /* @ts-expect-error Server Component */
        <CalendarBubble key={category} date={props.dateEng} category={category} />
      ))}
    </div>
  );
}

export default CalendarColumn;
