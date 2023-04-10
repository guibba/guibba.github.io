import Project from '../components/Project';

function Projects() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-slidein-top">
        PROJETOS
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 p-8">
        <Project className="animate-[slideleft_1.5s_both_0.8s]" />
        <Project className="animate-[slideleft_1.5s_both_0.6s]" />
        <Project className="animate-[slideleft_1.5s_both_0.4s]" />
      </div>
    </>
  );
}

export default Projects;
