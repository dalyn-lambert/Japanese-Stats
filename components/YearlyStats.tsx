import Window from './Window';

const YearlyStats = async () => {
  return (
    <Window English='Study Time by Year' Japanese='年の勉強' width='w-56' height='h-56'>
      <div className='text-sm italic'>Donut chart of yearly study time</div>
    </Window>
  );
};

export default YearlyStats;
