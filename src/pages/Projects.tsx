import { useState, useContext } from 'react';
import { DataContext } from '../data/DataContext';

import Project from '../components/Project';
import Button from '../components/Button';

function Projects() {
  const data = useContext(DataContext);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-blur-in opacity-0 mt-8 md:mt-0">
        {data.projects.sectionName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
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
                className={p.animation}
              />
            );
          }
        })}
      </div>
      {!showAll && (
        <Button
          size="medium"
          variant="primary"
          onClick={() => setShowAll(!showAll)}
          className="w-max mx-auto animate-slidein-bottom"
        >
          {data.projects.labelMoreButton}
        </Button>
      )}
    </>
  );
}

export default Projects;
