import Window from './Window';

const MonthlyStats = async () => {
  return (
    <Window English='Study Time by Month' Japanese='月の勉強' width='w-[25rem]' height='h-[25rem]'>
      <div className='italic text-sm'>Stacked bar graph showing study time in each category by month</div>
    </Window>
  );
};

export default MonthlyStats;
