import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './modules/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-white bg-black">
        <Outlet />
        <ScrollRestoration/>
      </main>
    </>
  );
}
