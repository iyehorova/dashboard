import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex h-[80px] items-center bg-black-main text-white">
      <Link className="ml-[20px] text-logo" href="/">
        <span>Company</span>{' '}
        <span className="font-black uppercase text-yellow">logo</span>
      </Link>

      <div className="ml-auto flex gap-[10px]">
        <Image
          src="/user-icon.svg"
          alt=""
          width={20}
          height={20}
          priority
          style={{ width: '20px', height: '20px' }}
        />
        mike-dawson@gmail.com
      </div>

      <button className="ml-[65px] mr-[30px] flex gap-[10px]">
        <Image
          src="/sign-out-icon.svg"
          alt=""
          width={20}
          height={20}
          priority
        />
        Sign Out
      </button>
    </header>
  );
};
