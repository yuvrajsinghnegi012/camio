import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
export const metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = (Component) =>
  function hoc() {
   return <main className="relative bg-dark-1">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full"><Component/></div>
        </section>
      </div>
    </main>
  }

export default RootLayout;
