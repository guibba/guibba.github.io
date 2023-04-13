import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { DataContext } from './data/DataContext';

import Header from './layout/Header';
import Bubbles from './components/Bubbles';

function App() {
  const data = useContext(DataContext);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <DataContext.Provider value={data}>
      <Bubbles className="absolute inset-0 overflow-hidden bg-gradient-to-t from-indigo-950 to-cyan-400 -z-10">
        <div
          className={`absolute inset-0 overflow-x-hidden ${
            isMenuOpened ? 'overflow-y-hidden' : 'overflow-y-auto'
          }`}
        >
          <Header
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
            className="relative flex justify-between items-center md:mb-8 p-6 pb-0 w-full z-20"
          />
          <main
            className={`relative flex flex-col justify-center items-center z-10 transition-opacity duration-700 ${
              isMenuOpened ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <section className="relative flex flex-col justify-center gap-8 w-full max-w-5xl md:mt-8 mb-24 px-8">
              <Outlet />
            </section>
          </main>
        </div>
      </Bubbles>
    </DataContext.Provider>
  );
}

export default App;
