import { CalendarColumnProps } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';

function CalendarColumn(props: CalendarColumnProps) {
  return (
    <div className='flex flex-col gap-1 items-center text-center'>
      <div className='text-2xl text-center pt-1 border-b-2 border-dark-gray pb-1'>{props.date}</div>
      <div className='flex flex-col gap-2'>
        <div className='w-28 h-6 rounded-md items-center bg-listen-purple'>{getIconForCategory('聴く')}</div>
        <div className='w-28 h-6 rounded-md items-center bg-dark-gray'>{getIconForCategory('読書')}</div>
        <div className='w-28 h-6 rounded-md items-center bg-dark-gray'>{getIconForCategory('観る')}</div>
        <div className='w-28 h-6 rounded-md items-center bg-game-green'>{getIconForCategory('ゲーム')}</div>
        <div className='w-28 h-6 rounded-md items-center bg-dark-gray'>{getIconForCategory('話す')}</div>
        <div className='w-28 h-6 rounded-md items-center bg-dark-gray'>{getIconForCategory('書く')}</div>
      </div>
    </div>
  );
}

export default CalendarColumn;
