import { TODAY_JAPANESE } from '@/lib/globals';
import WindowTitle from './WindowTitle';

const DateHeader = async () => {
  return (
    <div className='w-[200px] group drop-shadow-lg shadow-cyan-200'>
      <WindowTitle English='Date' Japanese='日付' />
      <div className=' h-[75px] bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4 overflow-y-scroll'>
        <div className='text-center pt-2'>{TODAY_JAPANESE}</div>
      </div>
    </div>
  );
};

export default DateHeader;
