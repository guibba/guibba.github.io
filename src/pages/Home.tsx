import Button from '../components/Button';
import Avatar from '../components/Avatar';
import IconMail from '../components/icons/IconMail';
import IconGitHub from '../components/icons/IconGitHub';
import IconLinkedIn from '../components/icons/IconLinkedIn';

const links = {
  resume: '#',
  email: '#',
  github: '#',
  linkedin: '#',
};

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-8 gap-x-14 p-5">
      <div className="flex flex-col flex-wrap justify-center items-center md:items-start gap-4">
        <p className="text-white animate-slidein-top">OI! MEU NOME É</p>
        <h1 className="text-5xl font-bold text-center text-[#ea7070] animate-slidein-top">
          Guilherme Bastos
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white bg-[#ea7070] p-4 rounded animate-slidein-left">
          Desenvolvedor Front-End
        </h1>
        <p className="text-lg md:text-xl font-light text-white text-center md:text-left mt-4 animate-slidein-left [&>strong]:text-bold [&>strong]:text-[#ea7070]">
          Comprometido em <strong>aprimorar</strong> minhas habilidades em
          programação, <strong>aprender</strong> novas tecnologias que surgem no
          mercado e <strong>criar experiências</strong> de usuário intuitivas,
          agradáveis e memoráveis.
        </p>
        <ul className="flex flex-wrap md:self-stretch justify-center md:justify-start items-center gap-6 md:mt-6">
          <li className="animate-slidein-left">
            <a href={links.resume}>
              <Button variant="primary" size="large">
                Currículo
              </Button>
            </a>
          </li>
          <ul className="flex flex-wrap justify-between items-center gap-4">
            <li>
              <a href={links.email}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s]"
                >
                  <IconMail className="w-9 h-9" />
                </Button>
              </a>
            </li>
            <li>
              <a href={links.github}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.7s]"
                >
                  <IconGitHub className="w-8 h-8" />
                </Button>
              </a>
            </li>
            <li>
              <a href={links.linkedin}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.8s,float_2.5s_infinite_2.9s]"
                >
                  <IconLinkedIn className="w-8 h-8" />
                </Button>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <Avatar />
    </div>
  );
}
export default Home;
