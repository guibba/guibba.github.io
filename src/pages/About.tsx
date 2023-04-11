function About() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-slidein-top">
        SOBRE
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 p-8 text-xl font-light text-white">
        <section className="flex flex-col justify-center items-center flex-1 gap-8 mb-0 md:mb-20 animate-slidein-left">
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            Olá, meu nome é <strong>Guilherme Bastos</strong>, sou um
            desenvolvedor Web que adora criar soluções digitais bonitas, úteis e
            eficientes.
          </p>
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            Sou <strong>autodidata</strong> e fui inspirado a me tornar um
            desenvolvedor web pela satisfação de construir coisas e vê-las sendo
            usadas por outras pessoas.
          </p>
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            Um dos meus hobbies é <strong>aprender</strong> habilidades variadas
            que não estão necessariamente diretamente relacionadas ao
            desenvolvimento web. Isso me dá uma perspectiva única sobre
            resolução de problemas e <strong>pensamento lateral</strong>.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center flex-1 gap-8 mt-0 md:mt-20 animate-slidein-right">
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            Um dos meus projetos favoritos foi criar um clone de um jogo arcade
            chamado QIX. Foi muito <strong>divertido</strong> ir mexendo nas
            equações matemáticas e <strong>descobrindo</strong> como recriar a
            mecânica do jogo.
          </p>
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            É muito <strong>gratificante</strong> ver um projeto que você fez do
            zero funcionando como planejado.
          </p>
          <p className="[&>strong]:text-[#ea7070] [&>strong]:font-bold">
            Estou sempre em busca de ferramentas que possam me ajudar a ser mais{' '}
            <strong>eficiente</strong> e de encontrar maneiras de automatizar
            tarefas repetitivas para que eu possa me concentrar em problemas
            mais desafiadores e <strong>interessantes</strong>.
          </p>
        </section>
      </div>
    </>
  );
}
export default About;
