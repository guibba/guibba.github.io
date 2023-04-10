function Contact() {
  const classes = [
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'overflow-hidden',
    'text-white',
    'md:cursor-pointer',
    'rounded-3xl',
    'py-3',
    'px-6',
    'bg-[#ea7070]',
    'shadow-bubble',
    'rounded-full',
    'blur-[0.5px]',
    "before:content-['']",
    'before:absolute',
    'before:top-0',
    'before:left-[-200%]',
    'before:w-[200%]',
    'before:h-full',
    'before:bg-shine',
    'hover:before:animate-shine',
  ].join(' ');

  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-slidein-top">
        CONTATO
      </h2>
      <form
        className="flex flex-col p-8 gap-6 m-6 bg-bubble shadow-bubble rounded-[3rem] relative blur-[0.5px] animate-[slidebottom_1.5s_both_0s,float_2.5s_infinite_1.8s]"
        action=""
      >
        <input
          type="text"
          placeholder="Nome"
          className="min-w-[3em] h-[30px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl placeholder:text-[#dddddd] focus:outline-none focus:bg-[#ffffff33]"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="min-w-[3em] h-[30px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl placeholder:text-[#dddddd] focus:outline-none focus:bg-[#ffffff33]"
        />
        <textarea
          maxLength={280}
          placeholder="Mensagem"
          className="min-w-[3em] h-[150px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl resize-none placeholder:text-[#dddddd] focus:outline-none focus:bg-[#ffffff33]"
        />
        <button value="Submit" className={classes}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default Contact;
