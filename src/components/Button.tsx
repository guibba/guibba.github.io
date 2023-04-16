import React from 'react';

import '../globals.postcss';

const sizes = {
  small: 'py-2 px-5',
  medium: 'py-2.5 px-6',
  large: 'py-3.5 px-7',
  icon: 'p-2.5',
};

const variants = {
  primary: 'bg-primary has-hover:hover:bg-primary-hl',
  secondary: 'bg-secondary has-hover:hover:bg-secondary-hl',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

function Button({
  type = 'button',
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`relative flex cursor-default items-center justify-center overflow-hidden rounded-full fill-default stroke-default text-default transition duration-200 focus:outline-default md:cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
