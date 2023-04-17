import { useState, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DataContext } from './data/DataContext';

import Header from './layout/Header';
import Bubbles from './components/Bubbles';

export interface OutletProps {
  isMenuOpened: boolean;
  userLang: 'pt-BR' | 'en-US';
}

function App() {
  const data = useContext(DataContext);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [userLang, setUserLang] = useState<'pt-BR' | 'en-US'>(
    (localStorage.getItem('lang') ?? 'pt-BR') as 'pt-BR' | 'en-US'
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', userLang);
    localStorage.setItem('lang', userLang);
  }, [userLang]);

  return (
    <DataContext.Provider value={data}>
      <Bubbles className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-t from-indigo-950 to-cyan-400">
        <div
          className={`absolute inset-0 overflow-x-hidden ${
            isMenuOpened ? 'overflow-y-hidden' : 'overflow-y-auto'
          }`}
        >
          <Header
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
            userLang={userLang}
            setUserLang={setUserLang}
            className="relative z-20 flex w-full items-center justify-between p-6 pb-0 md:mb-8"
          />
          <main
            className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-700 ${
              isMenuOpened ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <section className="relative mb-24 flex w-full max-w-5xl flex-col justify-center gap-8 px-8 md:mt-8">
              <Outlet context={{ isMenuOpened, userLang }} />
            </section>
          </main>
        </div>
      </Bubbles>
    </DataContext.Provider>
  );
}

export default App;
