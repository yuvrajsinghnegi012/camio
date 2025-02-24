import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks } from '../constants/constants';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              to={item.route}
              key={item.label}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${ isActive ? 'bg-blue-1' : ""}`}
            >
              <img
                src={item.imgURL}
                className="w-[24px] h-[24px]"
                alt={item.label}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
