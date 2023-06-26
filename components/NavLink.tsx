'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkData } from './TaskBar';
import Window from './Window';

type NavLinkProps = { link: LinkData };

const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname == link.route) {
    isActive = true;
  }

  return (
    <Link
      href={link.route}
      className={clsx(
        'text-black text-2xl tracking-widest text-center hover:text-gradient-1',
        isActive && 'text-gradient-1 font-bold'
      )}
    >
      <Window key={link.label} English='' Japanese='' width='w-36' height='h-36'>
        {link.label}
      </Window>
    </Link>
  );
};

export default NavLink;
