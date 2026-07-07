import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-100">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto p-6 flex flex-col mt-10">
        {/* The current page renders here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}