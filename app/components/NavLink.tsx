'use client';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { useGetUrl } from '@/app/hooks/useGetUrl';

interface NavLinkProps extends LinkProps {
  styles?: string;
  children: React.ReactNode;
}

export const NavLink = ({ styles = '', children, ...rest }: NavLinkProps) => {
  const pageUrl = useGetUrl();
  const isActive = pageUrl === rest.href;

  return (
    <Link
      {...rest}
      className={clsx(
        {
          'text-yellow': isActive,
        },
        styles,
      )}
    >
      {children}
    </Link>
  );
};
