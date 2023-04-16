export type Data = {
  home: HomeProps;
  about: AboutProps;
  skills: SkillsProps;
  projects: ProjectsProps;
  contact: ContactProps;
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
  home: {
    avatar: '/assets/avatar.png',
    greeting: 'OI! MEU NOME É',
    name: 'Guilherme Bastos',
    job: 'Desenvolvedor Front-End',
    description: (
      <>
        Comprometido em <strong>aprimorar</strong> minhas habilidades em
        programação, <strong>aprender</strong> novas tecnologias e{' '}
        <strong>criar experiências</strong> de usuário intuitivas, agradáveis e
        memoráveis.
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
          Meus hobbies incluem <strong>aprender</strong> coisas variadas que não
          estão necessariamente diretamente relacionadas ao desenvolvimento web.
          Isso me dá uma perspectiva única sobre resolução de problemas e{' '}
          <strong>pensamento lateral</strong>.
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
          tarefas repetitivas para que eu possa me concentrar em problemas mais
          desafiadores e <strong>interessantes</strong>.
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
};
