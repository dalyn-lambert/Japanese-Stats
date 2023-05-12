import { getLastGame, getLastListen, getLastRead, getLastSpeaking, getLastWatch } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import Window from './Window';

const getData = async () => {
  // destructure the arrays we get back from the maps
  const [reading] = await getLastRead();
  const [game] = await getLastGame();
  const [speaking] = await getLastSpeaking();
  const [listening] = await getLastListen();
  const [watching] = await getLastWatch();
  return [reading, game, speaking, listening, watching];
};

const LastStudied = async () => {
  const activities = await getData();
  return (
    <Window English='Last Studied' Japanese='前回の学習' width={'w-[750px]'} height={'h-[400px]'}>
      <div className='h-[375px] grid grid-cols-5 border-[1px] border-slate-700'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='bg-windows-gray border-r-[1px] last:border-r-0 border-slate-700 flex flex-col gap-4 items-center text-center text-sm'
          >
            <div className=''>{activity.title}</div>
            <div>{activity.media && `${activity.media}`}</div>
            <div>{`${activity.time} mins`}</div>
            <div className='pr-2 shrink-0 flex flex-row gap-1'>
              {getIconForCategory(activity.category)}
              {activity.category}
            </div>
            <div className='w-4 h-32 bg-gradient-to-r from-rose-300 to-red-400 rounded-full'></div>
            <div className=''>{format(parseISO(activity.date), 'MMM d, yyy')}</div>
          </div>
        ))}
      </div>
    </Window>
  );
};
export default LastStudied;
