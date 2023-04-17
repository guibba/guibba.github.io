export type Data = {
  'pt-BR': {
    home: HomeProps;
    about: AboutProps;
    skills: SkillsProps;
    projects: ProjectsProps;
    contact: ContactProps;
  };
  'en-US': {
    home: HomeProps;
    about: AboutProps;
    skills: SkillsProps;
    projects: ProjectsProps;
    contact: ContactProps;
  };
};

export type HomeProps = {
  avatar: string;
  greeting: string;
  name: string;
  job: string;
  description: JSX.Element;
  labelResume: string;
  linkResume: string;
  linkEmail: string;
  linkGitHub: string;
  linkLinkedIn: string;
};

export type AboutProps = {
  sectionName: string;
  paragraphs: {
    left: JSX.Element[];
    right: JSX.Element[];
  };
};

export type SkillsProps = {
  sectionName: string;
  list: Array<{
    icon: string;
    title: string;
    animation: string;
  }>;
};

export type ProjectsProps = {
  sectionName: string;
  list: Array<{
    image: string;
    title: string;
    description: string;
    languages: string[];
    linkCode: string;
    linkDemo: string;
    animation: string;
  }>;
  labelMoreButton: string;
};

export type ContactProps = {
  sectionName: string;
  formAction: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  labelSendButton: string;
};

export const data: Data = {
  'pt-BR': {
    home: {
      avatar: '/assets/avatar.png',
      greeting: 'OI! MEU NOME É',
      name: 'Guilherme Bastos',
      job: 'Desenvolvedor Front-End',
      description: (
        <>
          Comprometido em <strong>aprimorar</strong> minhas habilidades em
          programação, <strong>aprender</strong> novas tecnologias e{' '}
          <strong>criar experiências</strong> de usuário intuitivas, agradáveis
          e memoráveis.
        </>
      ),
      labelResume: 'Currículo',
      linkResume: '/cv_guilherme_bastos.pdf',
      linkEmail: 'mailto:guipbastos@gmail.com',
      linkGitHub: 'https://github.com/guibba',
      linkLinkedIn: 'https://www.linkedin.com/in/gpbastos/',
    },
    about: {
      sectionName: 'SOBRE',
      paragraphs: {
        left: [
          <>
            Olá, meu nome é <strong>Guilherme Bastos</strong>, sou um
            desenvolvedor Web que adora criar soluções digitais bonitas, úteis e
            eficientes.
          </>,
          <>
            Sou <strong>autodidata</strong> e fui inspirado a me tornar um
            desenvolvedor web pela satisfação de construir coisas e vê-las sendo
            usadas por outras pessoas.
          </>,
          <>
            Meus hobbies incluem <strong>aprender</strong> coisas variadas que
            não estão necessariamente diretamente relacionadas ao
            desenvolvimento web. Isso me dá uma perspectiva única sobre
            resolução de problemas e <strong>pensamento lateral</strong>.
          </>,
        ],
        right: [
          <>
            Um dos meus projetos favoritos foi criar um clone de um jogo arcade
            chamado QIX. Foi muito <strong>divertido</strong> ir mexendo nas
            equações matemáticas e <strong>descobrindo</strong> como recriar a
            mecânica do jogo.
          </>,
          <>
            É muito <strong>gratificante</strong> ver um projeto que você fez do
            zero funcionando como planejado.
          </>,
          <>
            Estou sempre em busca de ferramentas que possam me ajudar a ser mais{' '}
            <strong>eficiente</strong> e de encontrar maneiras de automatizar
            tarefas repetitivas para que eu possa me concentrar em problemas
            mais desafiadores e <strong>interessantes</strong>.
          </>,
        ],
      },
    },
    skills: {
      sectionName: 'COMPETÊNCIAS',
      list: [
        {
          icon: '/assets/html.svg',
          title: 'HTML',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.1s,float_2.5s_infinite_1.6s]',
        },
        {
          icon: '/assets/css.svg',
          title: 'CSS',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.2s,float_2.5s_infinite_1.7s]',
        },
        {
          icon: '/assets/javascript.svg',
          title: 'JavaScript',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.3s,float_2.5s_infinite_1.8s]',
        },
        {
          icon: '/assets/react.svg',
          title: 'React',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.4s,float_2.5s_infinite_1.9s]',
        },
        {
          icon: '/assets/typescript.svg',
          title: 'TypeScript',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.5s,float_2.5s_infinite_2.0s]',
        },
        {
          icon: '/assets/tailwind.svg',
          title: 'Tailwind CSS',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.6s,float_2.5s_infinite_2.1s]',
        },
        {
          icon: '/assets/reactrouter.svg',
          title: 'React Router',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.7s,float_2.5s_infinite_2.2s]',
        },
        {
          icon: '/assets/git.svg',
          title: 'Git',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.8s,float_2.5s_infinite_2.3s]',
        },
        {
          icon: '/assets/github.svg',
          title: 'GitHub',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.9s,float_2.5s_infinite_2.4s]',
        },
        {
          icon: '/assets/vite.svg',
          title: 'Vite',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.0s,float_2.5s_infinite_2.5s]',
        },
        {
          icon: '/assets/webpack.svg',
          title: 'Webpack',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.1s,float_2.5s_infinite_2.6s]',
        },
        {
          icon: '/assets/eslint.svg',
          title: 'ESLint',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.2s,float_2.5s_infinite_2.7s]',
        },
        {
          icon: '/assets/vscode.svg',
          title: 'VS Code',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.3s,float_2.5s_infinite_2.8s]',
        },
        {
          icon: '/assets/photoshop.svg',
          title: 'Photoshop',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.4s,float_2.5s_infinite_2.9s]',
        },
      ],
    },
    projects: {
      sectionName: 'PROJETOS',
      list: [
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJETO 1',
          description:
            'Descrição genérica de um projeto imaginário de desenvolvimento web que ficará ocupando o lugar da descrição de um projeto verdadeiro até que o mesmo seja criado.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-left_1.5s_both_0.4s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJETO 2',
          description:
            'Descrição genérica de um projeto imaginário de desenvolvimento web que ficará ocupando o lugar da descrição de um projeto verdadeiro até que o mesmo seja criado.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-left_1.5s_both_0.2s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJETO 3',
          description:
            'Descrição genérica de um projeto imaginário de desenvolvimento web que ficará ocupando o lugar da descrição de um projeto verdadeiro até que o mesmo seja criado.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-bottom_1.5s_both_0.2s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJETO 4',
          description:
            'Descrição genérica de um projeto imaginário de desenvolvimento web que ficará ocupando o lugar da descrição de um projeto verdadeiro até que o mesmo seja criado.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-bottom_1.5s_both_0.4s]',
        },
      ],
      labelMoreButton: 'Ver mais',
    },
    contact: {
      sectionName: 'CONTATO',
      formAction: 'https://formsubmit.co/82a52d048c06dae5de1835491f98c2d9',
      namePlaceholder: 'Nome',
      emailPlaceholder: 'E-mail',
      messagePlaceholder: 'Mensagem',
      labelSendButton: 'Enviar',
    },
  },
  'en-US': {
    home: {
      avatar: '/assets/avatar.png',
      greeting: 'HI! MY NAME IS',
      name: 'Guilherme Bastos',
      job: 'Front-End Developer',
      description: (
        <>
          Committed to <strong>improving</strong> my programming skills,{' '}
          <strong>learning</strong> new technologies and{' '}
          <strong>creating</strong> intuitive, enjoyable and memorable{' '}
          <strong>user experiences</strong>.
        </>
      ),
      labelResume: 'Resume',
      linkResume: '/cv_guilherme_bastos_en.pdf',
      linkEmail: 'mailto:guipbastos@gmail.com',
      linkGitHub: 'https://github.com/guibba',
      linkLinkedIn: 'https://www.linkedin.com/in/gpbastos/',
    },
    about: {
      sectionName: 'ABOUT',
      paragraphs: {
        left: [
          <>
            Hello, my name is <strong>Guilherme Bastos</strong>. I{"'"}m a web
            developer who loves to create beautiful, useful and efficient
            digital solutions.
          </>,
          <>
            I{"'"}m <strong>self-taught</strong> and was inspired to become a
            web developer by the satisfaction of building things and seeing them
            being used by other people.
          </>,
          <>
            My hobbies include <strong>learning</strong> a variety of things
            that aren{"'"}t necessarily directly related to web development, but
            they give me a unique perspective on problem-solving and{' '}
            <strong>lateral thinking</strong>.
          </>,
        ],
        right: [
          <>
            One of my favorite projects was creating a clone of an arcade game
            called QIX. It was a lot of <strong>fun</strong> tinkering with the
            math equations and <strong>figuring out</strong> how to recreate the
            game{"'"}s mechanics.
          </>,
          <>
            It{"'"}s very <strong>rewarding</strong> to see a project you made
            from scratch working as planned.
          </>,
          <>
            I{"'"}m always on the lookout for tools that can help me be more{' '}
            <strong>efficient</strong> and find ways to automate repetitive
            tasks so I can focus on more challenging and{' '}
            <strong>interesting</strong> problems.
          </>,
        ],
      },
    },
    skills: {
      sectionName: 'SKILLS',
      list: [
        {
          icon: '/assets/html.svg',
          title: 'HTML',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.1s,float_2.5s_infinite_1.6s]',
        },
        {
          icon: '/assets/css.svg',
          title: 'CSS',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.2s,float_2.5s_infinite_1.7s]',
        },
        {
          icon: '/assets/javascript.svg',
          title: 'JavaScript',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.3s,float_2.5s_infinite_1.8s]',
        },
        {
          icon: '/assets/react.svg',
          title: 'React',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.4s,float_2.5s_infinite_1.9s]',
        },
        {
          icon: '/assets/typescript.svg',
          title: 'TypeScript',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.5s,float_2.5s_infinite_2.0s]',
        },
        {
          icon: '/assets/tailwind.svg',
          title: 'Tailwind CSS',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.6s,float_2.5s_infinite_2.1s]',
        },
        {
          icon: '/assets/reactrouter.svg',
          title: 'React Router',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.7s,float_2.5s_infinite_2.2s]',
        },
        {
          icon: '/assets/git.svg',
          title: 'Git',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.8s,float_2.5s_infinite_2.3s]',
        },
        {
          icon: '/assets/github.svg',
          title: 'GitHub',
          animation:
            'animate-[slide-in-bottom_1.5s_both_0.9s,float_2.5s_infinite_2.4s]',
        },
        {
          icon: '/assets/vite.svg',
          title: 'Vite',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.0s,float_2.5s_infinite_2.5s]',
        },
        {
          icon: '/assets/webpack.svg',
          title: 'Webpack',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.1s,float_2.5s_infinite_2.6s]',
        },
        {
          icon: '/assets/eslint.svg',
          title: 'ESLint',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.2s,float_2.5s_infinite_2.7s]',
        },
        {
          icon: '/assets/vscode.svg',
          title: 'VS Code',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.3s,float_2.5s_infinite_2.8s]',
        },
        {
          icon: '/assets/photoshop.svg',
          title: 'Photoshop',
          animation:
            'animate-[slide-in-bottom_1.5s_both_1.4s,float_2.5s_infinite_2.9s]',
        },
      ],
    },
    projects: {
      sectionName: 'PROJECTS',
      list: [
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJECT 1',
          description:
            'Generic description of an imaginary web development project that serves as placeholder for the description of a real project until said project is created.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-left_1.5s_both_0.4s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJECT 2',
          description:
            'Generic description of an imaginary web development project that serves as placeholder for the description of a real project until said project is created.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-left_1.5s_both_0.2s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJECT 3',
          description:
            'Generic description of an imaginary web development project that serves as placeholder for the description of a real project until said project is created.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-bottom_1.5s_both_0.2s]',
        },
        {
          image: "bg-[url('/assets/project.png')]",
          title: 'PROJECT 4',
          description:
            'Generic description of an imaginary web development project that serves as placeholder for the description of a real project until said project is created.',
          languages: ['HTML', 'CSS', 'JavaScript'],
          linkCode: '#',
          linkDemo: '#',
          animation: 'animate-[slide-in-bottom_1.5s_both_0.4s]',
        },
      ],
      labelMoreButton: 'See more',
    },
    contact: {
      sectionName: 'CONTACT',
      formAction: 'https://formsubmit.co/82a52d048c06dae5de1835491f98c2d9',
      namePlaceholder: 'Name',
      emailPlaceholder: 'E-mail',
      messagePlaceholder: 'Message',
      labelSendButton: 'Send',
    },
  },
};
