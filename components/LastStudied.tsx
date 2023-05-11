import { getLastGame, getLastListen, getLastRead, getLastSpeaking, getLastWatch } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import WindowTitle from './WindowTitle';

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
    <div className='w-[550px] group drop-shadow-lg shadow-cyan-200'>
      <WindowTitle English='Last Studied' Japanese='前回の学習' />
      <div className='h-[250px] bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4 overflow-y-scroll'>
        {activities.map((activity) => (
          <div key={activity.id} className='flex flex-row text-base pb-4'>
            <div className='pr-2 shrink-0'>{getIconForCategory(activity.category)}</div>
            <div>
              {activity.title} {activity.media && `~ ${activity.media}`} on{' '}
              {format(parseISO(activity.date), 'MMM d, yyy')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LastStudied;
