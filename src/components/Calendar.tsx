import {
  DAY_BEFORE_YESTERDAY_DB,
  DAY_BEFORE_YESTERDAY_JP,
  TODAY_DB,
  TODAY_JP,
  YESTERDAY_DB,
  YESTERDAY_JP,
} from '@/lib/globals';
import CalDateCol from './CalendarColumn';
import Window from './Window';

const Calendar = async () => {
  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-[20.25rem]'>
      <div className='flex flex-cols-3 gap-4 pb-2 justify-evenly items-center border-2 shadow-inner shadow-white border-dark-gray'>
        {/* @ts-expect-error Server Component */}
        <CalDateCol dateJP={DAY_BEFORE_YESTERDAY_JP} dateEng={DAY_BEFORE_YESTERDAY_DB} />
        {/* @ts-expect-error Server Component */}
        <CalDateCol dateJP={YESTERDAY_JP} dateEng={YESTERDAY_DB} />
        {/* @ts-expect-error Server Component */}
        <CalDateCol dateJP={TODAY_JP} dateEng={TODAY_DB} />
      </div>
    </Window>
  );
};

export default Calendar;
