import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataContext } from '../data/DataContext';
import { OutletProps } from '../App';

function About() {
  const data = useContext(DataContext);
  const { userLang } = useOutletContext<OutletProps>();

  return (
    <>
      <h2 className="mt-8 animate-blur-in text-center text-3xl font-bold opacity-0 md:mt-0 md:text-4xl">
        {data[userLang].about.sectionName}
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 text-xl font-light md:flex-row md:gap-20">
        <section className="mb-0 flex flex-1 animate-slide-in-left flex-col items-center justify-center gap-8 md:mb-20">
          {data[userLang].about.paragraphs.left.map((item, i) => {
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
        <section className="mt-0 flex flex-1 animate-slide-in-right flex-col items-center justify-center gap-8 md:mt-20">
          {data[userLang].about.paragraphs.right.map((item, i) => {
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
