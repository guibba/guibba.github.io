import Button from '../components/Button';

function Contact() {
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
          className="min-w-[3em] h-[30px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl placeholder:text-[#ffffff99] focus:outline-none focus:bg-[#ffffff33]"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="min-w-[3em] h-[30px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl placeholder:text-[#ffffff99] focus:outline-none focus:bg-[#ffffff33]"
        />
        <textarea
          maxLength={280}
          placeholder="Mensagem"
          className="min-w-[3em] h-[250px] py-6 px-6 text-white bg-transparent shadow-bubble rounded-3xl resize-none placeholder:text-[#ffffff99] focus:outline-none focus:bg-[#ffffff33]"
        />
        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </form>
    </>
  );
}

export default Contact;
