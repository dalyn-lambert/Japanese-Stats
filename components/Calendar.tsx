import { DAY_BEFORE_YESTERDAY_JP, TODAY_JP, YESTERDAY_JP } from '@/lib/globals';
import CalDateCol from './CalendarColumn';
import Window from './Window';

const Calendar = async () => {
  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-80'>
      <div className='flex flex-cols-3 gap-4 justify-evenly items-center'>
        <CalDateCol date={DAY_BEFORE_YESTERDAY_JP} />
        <CalDateCol date={YESTERDAY_JP} />
        <CalDateCol date={TODAY_JP} />
      </div>
    </Window>
  );
};

export default Calendar;
