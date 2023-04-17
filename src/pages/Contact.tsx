import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataContext } from '../data/DataContext';
import { OutletProps } from '../App';

import Button from '../components/Button';

function Contact() {
  const data = useContext(DataContext);
  const { isMenuOpened, userLang } = useOutletContext<OutletProps>();

  return (
    <>
      <h2 className="mt-8 animate-blur-in text-center text-3xl font-bold opacity-0 md:mt-0 md:text-4xl">
        {data[userLang].contact.sectionName}
      </h2>
      <form
        className="relative mt-8 flex animate-slide-in-bottom flex-col gap-6 rounded-lg bg-secondary p-8"
        action={data[userLang].contact.formAction}
        method="POST"
      >
        <input
          tabIndex={isMenuOpened ? -1 : 0}
          type="text"
          name="name"
          placeholder={data[userLang].contact.namePlaceholder}
          maxLength={64}
          className="w-full bg-secondary px-6 py-3 transition duration-300 placeholder:text-default focus:bg-secondary-hl focus:outline-none focus:placeholder:text-transparent"
          title={data[userLang].contact.namePlaceholder}
        />
        <input
          tabIndex={isMenuOpened ? -1 : 0}
          type="email"
          name="email"
          maxLength={64}
          placeholder={data[userLang].contact.emailPlaceholder}
          className="w-full bg-secondary px-6 py-3 transition duration-300 placeholder:text-default focus:bg-secondary-hl focus:outline-none focus:placeholder:text-transparent"
          title={data[userLang].contact.emailPlaceholder}
        />
        <textarea
          tabIndex={isMenuOpened ? -1 : 0}
          name="message"
          maxLength={1024}
          placeholder={data[userLang].contact.messagePlaceholder}
          className="min-h-[250px] w-full resize-none bg-secondary px-6 py-6 transition duration-300 placeholder:text-default focus:bg-secondary-hl focus:outline-none focus:placeholder:text-transparent"
          title={data[userLang].contact.messagePlaceholder}
        />
        <Button
          tabIndex={isMenuOpened ? -1 : 0}
          type="submit"
          variant="primary"
          value="send"
          title={data[userLang].contact.labelSendButton}
        >
          {data[userLang].contact.labelSendButton}
        </Button>
      </form>
    </>
  );
}

export default Contact;
