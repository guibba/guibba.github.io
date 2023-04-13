import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

import Button from '../components/Button';
import Avatar from '../components/Avatar';
import IconMail from '../components/icons/IconMail';
import IconGitHub from '../components/icons/IconGitHub';
import IconLinkedIn from '../components/icons/IconLinkedIn';

function Home() {
  const data = useContext(DataContext);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-4 gap-x-12 lg:mt-24 md:mt-12">
      <div className="flex flex-col flex-wrap justify-center items-center md:items-start gap-6">
        <p className="animate-blur-in opacity-0">{data.home.greeting}</p>
        <h1 className="text-5xl font-bold text-center text-primary animate-slidein-left">
          {data.home.name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-primary p-4 rounded-lg animate-swing-in opacity-0">
          {data.home.job}
        </h2>
        <p className="text-lg md:text-xl font-light text-center md:text-left mt-4 animate-blur-in opacity-0 [&>strong]:text-bold [&>strong]:text-primary">
          {data.home.description}
        </p>
        <ul className="flex flex-wrap md:self-stretch justify-center md:justify-start items-center gap-x-6 gap-y-10 md:mt-6">
          <li className="animate-slidein-bottom">
            <a href={data.home.linkResume}>
              <Button variant="primary" size="large">
                {data.home.labelResume}
              </Button>
            </a>
          </li>
          <ul className="flex flex-wrap justify-between items-center gap-4">
            <li>
              <a href={data.home.linkEmail}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.2s,float_2.5s_infinite_2.5s]"
                >
                  <IconMail className="w-8 h-8" />
                </Button>
              </a>
            </li>
            <li>
              <a href={data.home.linkGitHub}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.7s]"
                >
                  <IconGitHub className="w-8 h-8" />
                </Button>
              </a>
            </li>
            <li>
              <a href={data.home.linkLinkedIn}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.9s]"
                >
                  <IconLinkedIn className="w-8 h-8" />
                </Button>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <Avatar
        imageSource={data.home.avatar}
        className="max-w-[350px] max-h-[350px] min-h-[250px] min-w-[250px] md:min-h-[300px] md:min-w-[300px] lg:min-h-[350px] lg:min-w-[350px] animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.7s]"
      />
    </div>
  );
}
export default Home;
