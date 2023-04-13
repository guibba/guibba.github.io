import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

function About() {
  const data = useContext(DataContext);

  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-blur-in opacity-0 mt-8 md:mt-0">
        {data.about.sectionName}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 text-xl font-light text-white">
        <section className="flex flex-col justify-center items-center flex-1 gap-8 mb-0 md:mb-20 animate-slidein-left">
          {data.about.paragraphs.left.map((item, i) => {
            return (
              <p
                key={i}
                className="text-center sm:text-left [&>strong]:text-[#ea7070] [&>strong]:font-bold"
              >
                {item}
              </p>
            );
          })}
        </section>
        <section className="flex flex-col justify-center items-center flex-1 gap-8 mt-0 md:mt-20 animate-slidein-right">
          {data.about.paragraphs.right.map((item, i) => {
            return (
              <p
                key={i}
                className="text-center sm:text-left [&>strong]:text-[#ea7070] [&>strong]:font-bold"
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
