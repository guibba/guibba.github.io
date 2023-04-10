import Button from './Button';

function Project(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      {...props}
      className={`flex flex-1 flex-col justify-stretch items-center gap-5 p-4 text-white ${
        props.className || ''
      }`}
    >
      <img
        className="rounded-2xl"
        src="https://via.placeholder.com/640x360"
        alt="Título"
      />
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-bold self-center text-[#ea7070]">
          TÍTULO
        </h3>
        <ul className="flex flex-row flex-wrap justify-center items-center gap-2">
          <li className="py-1 px-2 rounded bg-[#ea7070]">
            <strong className="text-white font-bold">Lorem</strong>
          </li>
          <li className="py-1 px-2 rounded bg-[#ea7070]">
            <strong className="text-white font-bold">Ipsum</strong>
          </li>
          <li className="py-1 px-2 rounded bg-[#ea7070]">
            <strong className="text-white font-bold">Dolor</strong>
          </li>
        </ul>
        <ul className="[&>li]:text-center">
          <li>Does this.</li>
          <li>And this.</li>
          <li>And also this.</li>
        </ul>
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <li>
            <Button href="#" size="small" variant="bubble">
              {'<CODE>'}
            </Button>
          </li>
          <li>
            <Button href="#" size="small" variant="selectedBubble">
              DEMO
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
