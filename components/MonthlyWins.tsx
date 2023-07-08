import { starIcon } from '@/lib/icons';
import { getWinFromId } from '@/lib/notion';
import { Win } from '@/lib/types';
import Window from './Window';

const getData = async (ids: string[]) => {
  let allWins = [];
  for (let i = 0; i < ids.length; i++) {
    allWins.push(await getWinFromId(ids[i]));
  }
  return allWins;
};

const MonthlyWins = async ({ wins }: { wins: Win[] }) => {
  const winIds: string[] = wins.map((win: Win) => win.id);
  const data = await getData(winIds);
  return (
    <Window English='Wins' Japanese='' width='w-96' height='h-72'>
      <div className='h-64 bg-slate-100 border-2 border-dark-gray rounded-sm p-4 overflow-y-scroll'>
        {data.map((win, index) => (
          <div key={index} className='flex flex-row text-sm pb-4 items-center'>
            <span className='pr-2 shrink-0'>{starIcon}</span>
            <span>{win.name}</span>
          </div>
        ))}
      </div>
    </Window>
  );
};

export default MonthlyWins;
