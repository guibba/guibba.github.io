import Skill from '../components/Skill';

function Skills() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center relative top-0 animate-slidein-top">
        TECNOLOGIAS
      </h2>
      <ul className="grid grid-cols-fluid auto-cols-fr justify-items-stretch items0center justify-center gap-6 p-8">
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/html.svg"
            title="HTML"
            className="animate-[slidebottom_1.5s_both_0.1s,float_2.5s_infinite_2.2s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            HTML
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/css.svg"
            title="CSS"
            className="animate-[slidebottom_1.5s_both_0.2s,float_2.5s_infinite_2.3s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            CSS
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/javascript.svg"
            title="JavaScript"
            className="animate-[slidebottom_1.5s_both_0.3s,float_2.5s_infinite_2.4s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            JavaScript
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/react.svg"
            title="ReactJS"
            className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            ReactJS
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/reactrouter.svg"
            title="React Router"
            className="animate-[slidebottom_1.5s_both_0.5s,float_2.5s_infinite_2.6s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            React Router
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/github.svg"
            title="GitHub"
            className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.7s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            GitHub
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/vite.svg"
            title="Vite"
            className="animate-[slidebottom_1.5s_both_0.7s,float_2.5s_infinite_2.8s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            Vite
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/webpack.svg"
            title="Webpack"
            className="animate-[slidebottom_1.5s_both_0.8s,float_2.5s_infinite_2.9s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            Webpack
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/eslint.svg"
            title="ESLint"
            className="animate-[slidebottom_1.5s_both_0.9s,float_2.5s_infinite_3s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            ESLint
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/vscode.svg"
            title="VS Code"
            className="animate-[slidebottom_1.5s_both_1s,float_2.5s_infinite_3.1s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            VS Code
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/prettier.svg"
            title="Prettier"
            className="animate-[slidebottom_1.5s_both_1.1s,float_2.5s_infinite_3.2s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            Prettier
          </p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2 [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <Skill
            icon="/assets/photoshop.svg"
            title="Photoshop"
            className="animate-[slidebottom_1.5s_both_1.2s,float_2.5s_infinite_3.3s]"
          />
          <p className="text-2xl font-normal text-center animate-slidein-bottom">
            Photoshop
          </p>
        </li>
      </ul>
    </>
  );
}

export default Skills;
