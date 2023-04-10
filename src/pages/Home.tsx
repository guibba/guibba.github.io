import Button from '../components/Button';
import Avatar from '../components/Avatar';

function Home() {
  const resumeUrl = '#';
  const emailUrl = '#';
  const githubUrl = '#';
  const linkedinUrl = '#';

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-8 gap-x-14 p-5">
      <div className="flex flex-col flex-wrap justify-center items-center md:items-start gap-2">
        <p className="text-white animate-slidein-top">OI! MEU NOME É</p>
        <h1 className="text-6xl font-bold text-center text-[#ea7070] animate-slidein-top">
          Guilherme Bastos
        </h1>
        <h1 className="text-4xl md:text-4xl font-bold text-center text-white bg-[#ea7070] p-4 rounded animate-slidein-left">
          Desenvolvedor Front-End
        </h1>
        <p className="text-xl md:text-2xl font-light text-white text-center md:text-left mt-4 animate-slidein-left [&>strong]:text-bold [&>strong]:text-[#ea7070]">
          Comprometido em <strong>aprimorar</strong> minhas habilidades em
          programação, <strong>aprender</strong> novas tecnologias que surgem no
          mercado e <strong>criar experiências</strong> de usuário intuitivas,
          agradáveis e memoráveis.
        </p>
        <ul className="flex flex-wrap md:self-stretch justify-center md:justify-start items-center gap-6 mt-4 md:mt-8">
          <li className="animate-slidein-left">
            <Button href={resumeUrl} variant="selectedBubble" size="medium">
              Currículo
            </Button>
          </li>
          <ul className="flex flex-wrap justify-between items-center gap-4">
            <li>
              <Button
                href={emailUrl}
                variant="bubble"
                size="icon"
                className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 237.832 237.832"
                  className="w-9 h-9 stroke-white fill-white"
                >
                  <g>
                    <path d="M228.977,33.916H8.854C3.969,33.916,0,37.881,0,42.771V195.06c0,4.891,3.969,8.856,8.854,8.856h220.123 c4.887,0,8.855-3.965,8.855-8.856V42.771C237.832,37.881,233.864,33.916,228.977,33.916z M221.026,182.184 c0,4.063-3.364,7.356-7.512,7.356h-12.339V73.379l-76.693,49.79c-1.687,1.096-3.627,1.641-5.566,1.641s-3.88-0.545-5.566-1.641 l-76.692-49.79V189.54h-12.34c-4.147,0-7.512-3.293-7.512-7.356V55.647c0-4.063,3.364-7.356,7.512-7.356h10.176l84.423,54.808 l84.423-54.808h10.176c4.147,0,7.512,3.293,7.512,7.356V182.184z" />
                  </g>
                </svg>
              </Button>
            </li>
            <li>
              <Button
                href={githubUrl}
                variant="bubble"
                size="icon"
                className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.7s]"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 stroke-white fill-white"
                >
                  <g>
                    <title>GitHub</title>
                    <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" />
                  </g>
                </svg>
              </Button>
            </li>
            <li>
              <Button
                href={linkedinUrl}
                variant="bubble"
                size="icon"
                className="animate-[slidebottom_1.5s_both_0.8s,float_2.5s_infinite_2.9s]"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 stroke-white fill-white"
                >
                  <g>
                    <title>Linkedin</title>
                    <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
                  </g>
                </svg>
              </Button>
            </li>
          </ul>
        </ul>
      </div>
      <Avatar />
    </div>
  );
}
export default Home;
