import { getLastGame, getLastListen, getLastRead, getLastSpeaking, getLastWatch } from '@/lib/notion';
import { getBarTypeForLastStudied, getColorForCategory, getIconForCategory, getTimeSinceStudied } from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  // destructure the arrays we get back from the maps
  const [listen] = await getLastListen();
  const [read] = await getLastRead();
  const [watch] = await getLastWatch();
  const [game] = await getLastGame();
  const [speak] = await getLastSpeaking();
  return [listen, read, watch, game, speak];
};

const LastStudied = async () => {
  const activities = await getData();
  return (
    <Window English='Last Studied' Japanese='前回の学習' width='w-[45rem]' height='h-[25rem]'>
      <div className='h-[22rem] grid grid-cols-5 border-2 shadow-inner shadow-white border-dark-gray'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='bg-windows-base border-r-2 border-dark-gray shadow-inner shadow-white  last:border-r-0 flex flex-col py-2 items-center text-center justify-between'
          >
            <div className='flex flex-col h-32 justify-between items-center px-2'>
              <div className='flex flex-col gap-4'>
                <div className='text-sm'>{activity.title}</div>
                <div className='text-xs'>{activity.media && `${activity.media}`}</div>
              </div>
              <div className='text-sm border-b-2 border-dark-gray pb-1 w-24 text-center'>
                {getTimeSinceStudied(activity.date)}
              </div>
            </div>
            <div className='flex flex-col gap-2 items-center text-center pt-2'>
              <div className='flex flex-col flex-nowrap justify-end w-10 h-32 bg-dark-gray rounded-md'>
                <div
                  className={`text-sm w-10 h-32 rounded-md 
                  ${
                    getBarTypeForLastStudied(activity.date) === 'border'
                      ? `border-[6px] border-${getColorForCategory(activity.category)}`
                      : `bg-${getColorForCategory(activity.category)}`
                  }`}
                ></div>
              </div>
              <div className='text-sm'>{`${activity.time} mins`}</div>
              <div className='text-sm shrink-0 flex flex-row gap-1 items-center text-center'>
                {getIconForCategory(activity.category)}
                {activity.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
};
export default LastStudied;
