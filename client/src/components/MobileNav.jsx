import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { sidebarLinks } from '../constants/constants';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <img
            src={"/icons/hamburger.svg"}
            className="w-[36px] h-[36px] cursor-pointer sm:hidden"
            alt="hamburger icon"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/icons/logo.svg"
              className="w-[32px] h-[32px]"
              alt="camio logo"
            />
            <p className="text-[26px] font-extrabold text-white">YOOM</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        to={item.route}
                        key={item.label}
                        className={`flex gap-4 items-center p-4 rounded-lg w-full max-w-60 ${isActive ? "bg-blue-1" : ""}`}
                      >
                        <img
                          src={item.imgURL}
                          className="w-[20px] h-[20px]"
                          alt={item.label}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
