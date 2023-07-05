import Window from './Window';

// const getData = async () => {
//   const wins = await getTodaysStudies();
//   return activities;
// };

const MonthlyWins = async (wins: string[]) => {
  console.log(wins);
  return (
    <Window English='Wins' Japanese='' width='w-96' height='h-72'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm p-4 overflow-y-scroll'>
        {/* {wins.map((win, index) => (
          <div key={index} className='flex flex-row text-sm pb-4 items-center'>
            <span className='pr-2 shrink-0'>{starIcon}</span>
            <span>{win}</span>
          </div>
        ))} */}
      </div>
    </Window>
  );
};

export default MonthlyWins;
