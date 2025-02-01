import { NavLink } from './NavLink';
import { ArrowLeft } from '../UI/ArrowLeft';

const navLinks = [
  { name: 'product list', link: '/product-list' },
  { name: 'my account', link: '/my-account' },
];

export const Sidebar = () => {
  return (
    <nav className="bg-dark-grey w-[290px] px-[20px] pt-[30px] text-white">
      <ul className='flex flex-col gap-[25px]'>
        {navLinks.map((item, i) => (
          <li className="capitalize" key={i}>
            <NavLink href={item.link} styles="flex justify-between items-center">
              {item.name}
              <ArrowLeft width='15' height='15'/>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
