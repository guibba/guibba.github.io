import { Link } from 'react-router-dom';

import BubbleBackground from '../components/BubbleBackground';

function Error() {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02084a] to-[#03d0d0]">
      <BubbleBackground />
      <div className="flex flex-col justify-center items-center gap-8 w-full h-full relative z-0">
        <div className="flex justify-center items-center p-5 aspect-square bg-bubble shadow-bubble rounded-full relative blur-[0.5px] animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s]">
          <p className="text-7xl font-bold text-white text-center sm:8xl">
            OPS!
          </p>
        </div>
        <p className="text-xl text-white text-center animate-slidein-bottom">
          Esta página non ecziste!
        </p>
        <p className="text-base text-white text-center animate-slidein-bottom">
          Clique{' '}
          <Link
            to="/"
            className="text-[#ea7070] font-bold hover:text-[#ea7070] hover:underline"
          >
            aqui
          </Link>{' '}
          para voltar
        </p>
      </div>
    </div>
  );
}

export default Error;
