import { getLastGame, getLastListen, getLastRead, getLastSpeaking, getLastWatch } from '@/lib/notion';
import { getIconForCategory } from '@/lib/utils';
import { format, parseISO } from 'date-fns';

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
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[550px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>前回の学習</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>Last Studied</span>
      </div>
      <div className='bg-lt w-[550px] h-[250px] rounded-b-sm p-4'>
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
