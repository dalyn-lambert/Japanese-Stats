import { getLastActivityForCategory } from '@/lib/notion';
import {
  getBackgroundForActivity,
  getBorderForActivity,
  getClassForLastStudied,
  getIconForCategory,
  getTimeSinceStudied,
  toHoursAndMinutes,
} from '@/lib/utils';
import Window from './Window';

const getData = async () => {
  // destructure the arrays we get back from the maps
  const [listen] = await getLastActivityForCategory('聴く');
  const [read] = await getLastActivityForCategory('読書');
  const [watch] = await getLastActivityForCategory('観る');
  const [game] = await getLastActivityForCategory('ゲーム');
  const [speak] = await getLastActivityForCategory('話す');
  return [listen, read, watch, game, speak];
};

const LastStudied = async () => {
  const activities = await getData();
  return (
    <Window English='Last Studied' Japanese='前回の学習' width='w-[50rem]' height='h-[25rem]'>
      <div className='h-[22rem] grid grid-cols-5 border-2 shadow-inner shadow-white border-dark-gray'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='text-sm bg-windows-base border-r-2 border-dark-gray shadow-inner shadow-white last:border-r-0 flex flex-col py-2 items-center text-center justify-between'
          >
            <div className='flex flex-col h-32 justify-between items-center px-2 gap-2'>
              <span className='line-clamp-1'>{activity.title}</span>
              <span className='line-clamp-1'>{activity.media}</span>
              <span className='border-b-2 border-dark-gray pb-1 w-[8rem] text-center'>
                {getTimeSinceStudied(activity.date)}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center text-center pt-2'>
              <div className='flex flex-col flex-nowrap justify-end w-10 h-32 bg-mid-gray rounded-md'>
                <div
                  className={`w-10 h-32 rounded-md 
                  ${
                    getClassForLastStudied(activity.date) === 'border'
                      ? `${getBorderForActivity(activity.date, activity.category)}`
                      : `${getBackgroundForActivity(activity.category)}`
                  }`}
                ></div>
              </div>
              <span className=''>{toHoursAndMinutes(activity.time)}</span>
              <span className='shrink-0 flex flex-row gap-1 items-center text-center'>
                {getIconForCategory(activity.category)}
                {activity.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
};
export default LastStudied;
