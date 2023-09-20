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
    </div>
  );
};

export default TaskBar;
