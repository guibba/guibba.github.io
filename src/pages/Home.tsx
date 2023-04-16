import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataContext } from '../data/DataContext';

import Button from '../components/Button';
import Avatar from '../components/Avatar';
import IconMail from '../components/icons/IconMail';
import IconGitHub from '../components/icons/IconGitHub';
import IconLinkedIn from '../components/icons/IconLinkedIn';

function Home() {
  const data = useContext(DataContext);
  const isMenuOpened = useOutletContext<boolean>();

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-x-12 gap-y-4 md:flex-row">
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 md:items-start">
        <p className="animate-blur-in opacity-0">{data.home.greeting}</p>
        <h1 className="animate-slide-in-left text-center text-5xl font-bold text-primary">
          {data.home.name}
        </h1>
        <h2 className="animate-swing-in rounded-lg bg-primary p-4 text-center text-3xl font-bold opacity-0 md:text-4xl">
          {data.home.job}
        </h2>
        <p className="[&>strong]:text-bold mt-4 animate-blur-in text-center text-lg font-light opacity-0 md:text-left md:text-xl [&>strong]:text-primary">
          {data.home.description}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10 md:mt-6 md:justify-start md:self-stretch">
          <li className="animate-slide-in-bottom">
            <a
              href={data.home.linkResume}
              download="cv_guilherme_bastos"
              tabIndex={-1}
            >
              <Button
                tabIndex={isMenuOpened ? -1 : 0}
                variant="primary"
                size="large"
                title={data.home.labelResume}
              >
                {data.home.labelResume}
              </Button>
            </a>
          </li>
          <ul className="flex flex-wrap items-center justify-between gap-4">
            <li>
              <a href={data.home.linkEmail} tabIndex={-1}>
                <Button
                  tabIndex={isMenuOpened ? -1 : 0}
                  variant="secondary"
                  size="icon"
                  className="animate-[slide-in-bottom_1.5s_both_0.2s,float_2.5s_infinite_1.7s]"
                  title="E-mail"
                >
                  <IconMail className="h-8 w-8" />
                </Button>
              </a>
            </li>
            <li>
              <a
                href={data.home.linkGitHub}
                tabIndex={-1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  tabIndex={isMenuOpened ? -1 : 0}
                  variant="secondary"
                  size="icon"
                  className="animate-[slide-in-bottom_1.5s_both_0.4s,float_2.5s_infinite_1.9s]"
                  title="GitHub"
                >
                  <IconGitHub className="h-8 w-8" />
                </Button>
              </a>
            </li>
            <li>
              <a
                href={data.home.linkLinkedIn}
                tabIndex={-1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  tabIndex={isMenuOpened ? -1 : 0}
                  variant="secondary"
                  size="icon"
                  className="animate-[slide-in-bottom_1.5s_both_0.6s,float_2.5s_infinite_2.1s]"
                  title="LinkedIn"
                >
                  <IconLinkedIn className="h-8 w-8" />
                </Button>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <Avatar
        imageSource={data.home.avatar}
        className="max-h-[350px] min-h-[250px] min-w-[250px] max-w-[350px] animate-[slide-in-bottom_1.5s_both_0.4s,float_2.5s_infinite_1.9s] md:min-h-[300px] md:min-w-[300px] lg:min-h-[350px] lg:min-w-[350px]"
      />
    </div>
  );
}
export default Home;
