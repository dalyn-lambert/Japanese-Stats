'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkData } from './TaskBar';

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
      className={clsx('text-black text-2xl tracking-widest hover:text-red', isActive && 'text-red font-bold')}
    >
      {link.label}
    </Link>
  );
};

export default NavLink;
