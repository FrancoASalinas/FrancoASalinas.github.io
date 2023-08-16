import { Outlet } from 'react-router-dom';
import Header from './modules/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-white mt-16 bg-black">
        <Outlet />
      </main>
    </>
  );
}
