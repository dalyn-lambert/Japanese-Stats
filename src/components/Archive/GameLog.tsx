import { getRecentGameLogs } from '@/lib/notion';
import GameBubble from './GameBubble';
import Window from '../Window';

const getData = async () => {
  const activities = await getRecentGameLogs();
  return activities;
};

const GameLog = async () => {
  const logs = await getData();
  return (
    <Window English='Game Log' Japanese='ゲームログ' width='w-72' height='h-96'>
      <div className='bg-game-green bg-opacity-70 overflow-y-scroll flex flex-col gap-2 p-2 border-2 shadow-inner shadow-white border-dark-gray'>
        {logs.map((log) => (
          <GameBubble key={log.id} {...log} />
        ))}
      </div>
    </Window>
  );
};

export default GameLog;
