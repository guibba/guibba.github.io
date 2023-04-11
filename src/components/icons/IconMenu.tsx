function IconMenu({
  className,
  ...props
}: React.SVGAttributes<SVGElement>): JSX.Element {
  return (
    /*<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 24"
      className={className}
      {...props}
    >
      <path d="M9.125 21.1L.7 12.7q-.15-.15-.213-.325T.425 12q0-.2.063-.375T.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z" />
    </svg>*/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className={className}
      {...props}
    >
      <path d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" />
    </svg>
  );
}

export default IconMenu;
