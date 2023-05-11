import { TODAY_JAPANESE } from '@/lib/globals';
import Window from './Window';

const DateHeader = async () => {
  return (
    <Window English='Date' Japanese='日付'>
      <div className='text-center pt-2'>{TODAY_JAPANESE}</div>
    </Window>
  );
};

export default DateHeader;
