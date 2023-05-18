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
    <Window English='Last Studied' Japanese='前回の学習' width={'w-[750px]'} height={'h-[400px]'}>
      <div className='h-[375px] grid grid-cols-5 border-2 shadow-inner shadow-white border-dark-gray'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='bg-windows-base border-r-2 border-dark-gray shadow-inner shadow-white  last:border-r-0 flex flex-col py-2 items-center text-center text-sm justify-between'
          >
            <div className='flex flex-col h-[125px] justify-between items-center px-2'>
              <div className='flex flex-col gap-4'>
                <div className=''>{activity.title}</div>
                <div>{activity.media && `${activity.media}`}</div>
              </div>
              <div className='border-b-2 border-dark-gray pb-1 w-[100px] text-center'>
                {getTimeSinceStudied(activity.date)}
              </div>
            </div>
            <div className='flex flex-col gap-2 items-center text-center'>
              <div className='flex flex-col flex-nowrap justify-end w-10 h-32 bg-dark-gray rounded-md'>
                <div
                  className={`w-10 h-32 rounded-md 
                  ${
                    getBarTypeForLastStudied(activity.date) === 'border'
                      ? `border-[6px] border-${getColorForCategory(activity.category)}`
                      : `bg-${getColorForCategory(activity.category)}`
                  }`}
                ></div>
              </div>
              <div>{`${activity.time} mins`}</div>
              <div className=' shrink-0 flex flex-row gap-1 items-center text-center'>
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
