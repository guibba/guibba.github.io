import { Outlet } from 'react-router-dom';

import './App.css';

import Header from './layout/Header';
import BubbleBackground from './components/BubbleBackground';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-stretch bg-gradient-to-t from-[#02084a] to-[#03d0d0] overflow-hidden">
        <section className="relative">
          <BubbleBackground />
          <div className="flex flex-col justify-center items-stretch max-w-5xl py-5 px-0 m-auto min-h-screen relative z-50">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
