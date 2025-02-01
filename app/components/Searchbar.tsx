import  Image from "next/image";

export const Searchbar = () => {
  return (
    <div className="border border-grey flex items-center rounded-[5px]">
      <input type="text" placeholder="Search" className="px-[25px]" />
      <div className="bg-yellow w-[56px] h-[48px] ml-auto flex items-center justify-center">
        <Image src="/search-icon.svg" alt="" width={24} height={24} priority />
        </div>
    </div>
  );
};
