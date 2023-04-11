import '../globals.postcss';

function Avatar(): JSX.Element {
  return (
    <figure className="bubble md:min-w-[350px] md:min-h-[350px] max-w-[500px] max-h-[500px] animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.7s]">
      <img
        src="https://via.placeholder.com/500"
        alt="Avatar"
        className="rounded-full blur-[0.5px]"
      />
      <figcaption className="hidden">Avatar</figcaption>
    </figure>
  );
}

export default Avatar;
