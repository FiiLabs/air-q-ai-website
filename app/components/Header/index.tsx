import Logo from '@/assets/svg/header-logo.svg?react';
import { cn } from '@/utils';
import Link from 'next/link';

interface HeaderProps extends React.ComponentProps<'header'> {}

const Header = (props: HeaderProps) => {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-[#171717] px-5 py-4',
        className,
      )}
      {...rest}>
      <Link
        href="/"
        aria-label="return to homepage">
        <Logo />
      </Link>
      <a
        href="docs.pdf"
        role="button"
        className="rounded-lg bg-white px-6 py-2 text-black md:px-10 md:py-4 xl:px-12">
        Docs
      </a>
    </header>
  );
};

export { Header };
