import { Link } from "react-router-dom";

import Bubbles from "../components/Bubbles";

function Error() {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02084a] to-[#03d0d0]">
      <Bubbles className="absolute inset-0 h-full w-full overflow-hidden" />
      <div className="relative z-0 flex h-full w-full flex-col items-center justify-center gap-8">
        <div className="relative flex aspect-square animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] items-center justify-center rounded-full bg-bubble p-5 shadow-bubble blur-[0.5px]">
          <p className="sm:8xl text-center text-7xl font-bold text-white">
            OPS!
          </p>
        </div>
        <p className="animate-slidein-bottom text-center text-xl text-white">
          Esta página non ecziste!
        </p>
        <p className="animate-slidein-bottom text-center text-base text-white">
          Clique{" "}
          <Link
            to="/"
            className="font-bold text-[#ea7070] hover:text-[#ea7070] hover:underline"
          >
            aqui
          </Link>{" "}
          para voltar
        </p>
      </div>
    </div>
  );
}

export default Error;
