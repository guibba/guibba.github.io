function IconBR({
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
          id="filter-br"
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
        id="mask-br"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <circle
          fill="#FFFFFF"
          filter="url(#filter-br)"
          cx="256"
          cy="256"
          r="256"
        />
      </mask>
      <g mask="url(#mask-br)">
        <path fill="#009641" d="M0,0h512v512H0V0z" />
        <path
          fill="#FFCA00"
          d="M256,100.2L467.5,256L256,411.8L44.5,256L256,100.2z"
        />
        <path
          fill="#FDFFFF"
          d="M174.2,221c-5,11.4-7.4,23.8-7.2,36.3l162,49.8c7.1-10.2,12-21.8,14.4-34C302.8,207.8,223.7,192.8,174.2,221 L174.2,221z"
        />
        <path
          fill="#2E2682"
          d="M255.7,167c-14.6,0-29,3.7-41.9,10.6c-17.7,9.6-31.7,24.9-39.6,43.4c61.6-13.1,125.6,6.7,169.1,52.2 c4-20.2,0.8-41.2-9-59.4C318.7,184.9,288.5,166.9,255.7,167L255.7,167z M212,250.5c-15.3-0.1-30.4,2.2-45,6.8 c0.2,14.3,3.8,28.3,10.5,40.9c23.3,43.3,77.2,59.5,120.5,36.2c0,0,0,0,0.1,0c12.2-6.6,22.7-15.9,30.7-27.3 C300.4,271.6,257.5,250.8,212,250.5z"
        />
      </g>
    </svg>
  );
}

export default IconBR;
