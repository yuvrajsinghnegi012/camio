// import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-black px-6 py-3 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <img
          src="/icons/logo.svg"
          className="max-sm:size-10 h-[32px] w-[32px]"
          // width={32}
          // height={32}
          alt="camio logo"
        />
        <p className="text-[25px] font-semibold text-white max-sm:hidden">
          Camio
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* <SignedIn> */}
          {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        {/* </SignedIn> */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
