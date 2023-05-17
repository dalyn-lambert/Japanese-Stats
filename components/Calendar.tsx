import { TODAY_JAPANESE } from '@/lib/globals';
import Window from './Window';

const Calendar = async () => {
  return (
    <Window English='Date' Japanese='日付' width={'w-[500px]'} height={'h-[350px]'}>
      <div className='flex flex-cols-3 gap-4 justify-evenly items-center'>
        <div className='flex flex-col gap-2 items-center text-center'>
          <div className='text-3xl text-center pt-2'>{TODAY_JAPANESE}</div>
          <div className='text-lg text-center pt-2 border-b-2 border-dark-gray pb-1'>May 15, 2023</div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
        </div>
        <div className='flex flex-col gap-2 items-center text-center'>
          <div className='text-3xl text-center pt-2'>{TODAY_JAPANESE}</div>
          <div className='text-lg text-center pt-2 border-b-2 border-dark-gray pb-1'>May 15, 2023</div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
        </div>
        <div className='flex flex-col gap-2 items-center text-center'>
          <div className='text-3xl text-center pt-2'>{TODAY_JAPANESE}</div>
          <div className='text-lg text-center pt-2 border-b-2 border-dark-gray pb-1'>May 15, 2023</div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
          <div className='w-[125px] h-[25px] rounded-md bg-dark-gray'></div>
        </div>
      </div>
    </Window>
  );
};

export default Calendar;
