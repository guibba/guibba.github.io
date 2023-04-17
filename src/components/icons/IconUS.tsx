function IconUS({
  className,
  ...props
}: React.SVGAttributes<SVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      {...props}
    >
      <defs>
        <filter
          id="filter-us"
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="512"
          height="512"
        >
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
      </defs>
      <mask
        id="mask-us"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <circle
          fill="#FFFFFF"
          filter="url(#filter-us)"
          cx="256"
          cy="256"
          r="256"
        />
      </mask>
      <g mask="url(#mask-us)">
        <path
          fill="#FFFFFF"
          d="M256,0h256v64l-32,32l32,32v64l-32,32l32,32v64l-32,32l32,32v64l-256,32L0,448v-64l32-32L0,320v-64L256,0z"
        />
        <path
          fill="#B22234"
          d="M224,64h288v64H224V64z M224,192h288v64H256L224,192z M0,320h512v64H0V320z M0,448h512v64H0V448z"
        />
        <path fill="#3C3B6E" d="M0,0h256v256H0V0z" />
        <path
          fill="#EEEEEE"
          d="M187,243l57-41h-70l57,41l-22-67L187,243z M106,243l57-41H93l57,41l-22-67L106,243z M25,243l57-41H12l57,41 l-22-67L25,243z M187,162l57-41h-70l57,41l-22-67L187,162z M106,162l57-41H93l57,41l-22-67L106,162z M25,162l57-41H12l57,41L47,95 L25,162z M187,80l57-41h-70l57,41l-22-67L187,80z M106,80l57-41H93l57,41l-22-67L106,80z M25,80l57-41H12l57,41L47,13L25,80z"
        />
      </g>
    </svg>
  );
}

export default IconUS;
