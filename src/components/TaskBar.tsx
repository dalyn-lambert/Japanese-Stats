import NavLink from './NavLink';
import Window from './Window';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'Home', route: '/' },
  { label: 'Posts', route: '/posts' },
  { label: 'Admin', route: '' },
];

const TaskBar = async () => {
  return (
    <div className='flex flex-col gap-4 p-7'>
      {links.map((link) => (
        <NavLink key={link.label} link={link} />
      ))}
      <Window English='Vocab' Japanese='単語' width='w-44' height='h-52'>
        <div className='h-52 flex flex-col gap-1 bg-slate-100 border-2 border-dark-gray rounded-sm p-4 text-sm'>
          <li>聴く: To Listen</li>
          <li>読書: To Read</li>
          <li>観る: To Watch</li>
          <li>ゲーム: Game</li>
          <li>話す: To Talk</li>
        </div>
      </Window>
    </div>
  );
};

export default TaskBar;
