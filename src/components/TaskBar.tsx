import NavLink from './NavLink';
import Window from './Window';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'Start', route: '/' },
  { label: 'All Posts', route: '/posts' },
];

const TaskBar = async () => {
  return (
    <div className='flex flex-col gap-4 p-7'>
      {links.map((link) => (
        <NavLink key={link.label} link={link} />
      ))}
      <Window English='' Japanese='' width='w-36' height='h-52'>
        <div className='h-52 flex flex-col bg-slate-100 border-2 border-dark-gray rounded-sm p-4 overflow-y-scroll text-xs'>
          <span>聴く: To Listen</span>
          <span>読書: To Read</span>
          <span>観る: To Watch</span>
          <span>ゲーム: Game</span>
          <span>話す: To Talk</span>
        </div>
      </Window>
    </div>
  );
};

export default TaskBar;
