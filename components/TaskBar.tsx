import NavLink from './NavLink';

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
    </div>
  );
};

export default TaskBar;
