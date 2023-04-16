import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

function About() {
  const data = useContext(DataContext);

  return (
    <>
      <h2 className="mt-8 animate-blur-in text-center text-3xl font-bold opacity-0 md:mt-0 md:text-4xl">
        {data.about.sectionName}
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 text-xl font-light md:flex-row md:gap-20">
        <section className="animate-slide-in-left mb-0 flex flex-1 flex-col items-center justify-center gap-8 md:mb-20">
          {data.about.paragraphs.left.map((item, i) => {
            return (
              <p
                key={i}
                className="text-center sm:text-left [&>strong]:font-bold [&>strong]:text-[#ea7070]"
              >
                {item}
              </p>
            );
          })}
        </section>
        <section className="animate-slide-in-right mt-0 flex flex-1 flex-col items-center justify-center gap-8 md:mt-20">
          {data.about.paragraphs.right.map((item, i) => {
            return (
              <p
                key={i}
                className="text-center sm:text-left [&>strong]:font-bold [&>strong]:text-[#ea7070]"
              >
                {item}
              </p>
            );
          })}
        </section>
      </div>
    </>
  );
}
export default About;
