import { FC } from 'react';
import Image from 'next/image';

export const Header: FC = () => {
  return (
    <header className="bg-black-main flex h-[80px] items-center text-white">
      <div className="text-logo ml-[20px]">
        <span>Company</span>{' '}
        <span className="text-yellow font-black uppercase">logo</span>
      </div>

      <div className="ml-auto flex gap-[10px]">
        <Image src="/user-icon.svg" alt="" width={20} height={20} priority />
        mike-dawson@gmail.com
      </div>

      <div className="ml-[65px] mr-[30px] flex gap-[10px]">
        <Image
          src="/sign-out-icon.svg"
          alt=""
          width={20}
          height={20}
          priority
        />
        Sign Out
      </div>
    </header>
  );
};
