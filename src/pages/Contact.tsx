import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

import Button from '../components/Button';

function Contact() {
  const data = useContext(DataContext);

  return (
    <>
      <h2 className="text-4xl font-bold text-center animate-blur-in opacity-0 mt-8 md:mt-0">
        {data.contact.sectionName}
      </h2>
      <form
        className="flex flex-col p-8 gap-6 bg-secondary rounded-lg relative animate-slidein-bottom mt-8"
        action={data.contact.formAction}
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder={data.contact.namePlaceholder}
          maxLength={64}
          className="w-full py-3 px-6 text-white bg-secondary placeholder:text-white focus:outline-none focus:bg-secondary-hl"
        />
        <input
          type="email"
          name="email"
          maxLength={64}
          placeholder={data.contact.emailPlaceholder}
          className="w-full py-3 px-6 text-white bg-secondary placeholder:text-white focus:outline-none focus:bg-[#ffffff44]"
        />
        <textarea
          name="message"
          maxLength={1024}
          placeholder={data.contact.messagePlaceholder}
          className="w-full min-h-[250px] py-6 px-6 text-white bg-secondary resize-none placeholder:text-white focus:outline-none focus:bg-secondary-hl"
        />
        <Button type="submit" variant="primary" value="send">
          {data.contact.labelSendButton}
        </Button>
      </form>
    </>
  );
}

export default Contact;
