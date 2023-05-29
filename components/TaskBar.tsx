import NavLink from './NavLink';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'Start', route: '/' },
  { label: 'Posts', route: '/posts' },
];

const TaskBar = async () => {
  return (
    <div className='bg-dark-gray w-screen h-10 flex flex-row gap-4'>
      {links.map((link) => (
        <NavLink key={link.label} link={link} />
      ))}
    </div>
  );
};

export default TaskBar;
