import BarGraphStack from './BarGraphStack';
import Window from './Window';

const RecentlyStudied = async () => {
  return (
    <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-[20.25rem]'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm'>
        <BarGraphStack width={500} height={250} />
      </div>
    </Window>
  );
};

export default RecentlyStudied;
