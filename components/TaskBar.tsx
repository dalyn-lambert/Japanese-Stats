import NavLink from './NavLink';
import Window from './Window';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'Start', route: '/' },
  { label: 'Posts', route: '/posts' },
];

const TaskBar = async () => {
  return (
    <div className='flex flex-col gap-4'>
      {links.map((link) => (
        <Window key={link.label} English='' Japanese='' width='w-32' height='h-32'>
          <NavLink link={link} />
        </Window>
      ))}
    </div>
  );
};

export default TaskBar;
