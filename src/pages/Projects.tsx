import { useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataContext } from '../data/DataContext';

import Project from '../components/Project';
import Button from '../components/Button';

function Projects() {
  const data = useContext(DataContext);
  const isMenuOpened = useOutletContext<boolean>();
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <h2 className="mt-8 animate-blur-in text-center text-3xl font-bold opacity-0 md:mt-0 md:text-4xl">
        {data.projects.sectionName}
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-2">
        {data.projects.list.map((p, i) => {
          if (showAll || i < 2) {
            return (
              <Project
                key={i}
                image={p.image}
                title={p.title}
                description={p.description}
                languages={p.languages}
                linkCode={p.linkCode}
                linkDemo={p.linkDemo}
                isMenuOpened={isMenuOpened}
                className={p.animation}
              />
            );
          }
        })}
      </div>
      {!showAll && (
        <Button
          tabIndex={isMenuOpened ? -1 : 0}
          size="medium"
          variant="primary"
          onClick={() => setShowAll(!showAll)}
          className="mx-auto w-max animate-slide-in-bottom"
          title={data.projects.labelMoreButton}
        >
          {data.projects.labelMoreButton}
        </Button>
      )}
    </>
  );
}

export default Projects;
