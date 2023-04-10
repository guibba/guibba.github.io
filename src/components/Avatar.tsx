function Avatar() {
  return (
    <figure className="flex justify-center items-center min-w-[350px] max-w-[500px] min-h-[350px] max-h-[500px] aspect-square bg-bubble shadow-bubble rounded-full opacity-100 my-4 mx-0 md:m-0 p-8 relative animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s]">
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
