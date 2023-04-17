import { useContext } from 'react';
import { DataContext } from '../data/DataContext';
import { useOutletContext } from 'react-router-dom';
import { OutletProps } from '../App';

import Skill from '../components/Skill';

function Skills() {
  const data = useContext(DataContext);
  const { userLang } = useOutletContext<OutletProps>();

  return (
    <>
      <h2 className="relative top-0 mt-8 animate-blur-in text-center text-3xl font-bold opacity-0 md:mt-0 md:text-4xl">
        {data[userLang].skills.sectionName}
      </h2>
      <ul className="mt-8 flex flex-row flex-wrap justify-center gap-x-9 gap-y-12">
        {data[userLang].skills.list.map((s, i) => {
          return (
            <li
              key={i}
              className="flex flex-col items-center justify-center gap-2 [&>p]:text-center [&>p]:text-base [&>p]:font-normal"
              title={s.title}
            >
              <Skill icon={s.icon} title={s.title} className={s.animation} />
              <p className="animate-slide-in-bottom text-center text-2xl font-normal">
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
