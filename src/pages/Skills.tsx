import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

import Skill from '../components/Skill';

function Skills() {
  const data = useContext(DataContext);

  return (
    <>
      <h2 className="text-4xl font-bold text-center relative top-0 animate-blur-in opacity-0 mt-8 md:mt-0">
        {data.skills.sectionName}
      </h2>
      <ul className="flex flex-row flex-wrap justify-center gap-x-9 gap-y-12 mt-8">
        {data.skills.list.map((s, i) => {
          return (
            <li
              key={i}
              className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center"
            >
              <Skill icon={s.icon} title={s.title} className={s.animation} />
              <p className="text-2xl font-normal text-center animate-slidein-bottom">
                {s.title}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Skills;
