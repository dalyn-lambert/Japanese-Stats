import { TODAY_JAPANESE } from '@/lib/globals';
import Window from './Window';

const DateHeader = async () => {
  return (
    <Window English='Date' Japanese='日付' width={'w-[200px]'} height={'h-[115px]'}>
      <div className='text-center pt-2'>{TODAY_JAPANESE}</div>
    </Window>
  );
};

export default DateHeader;
