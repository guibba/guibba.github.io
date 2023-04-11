import React from 'react';
import cls from '../utils/cls';

import '../globals.postcss';

const sizes = {
  small: 'py-2 px-5',
  medium: 'py-2.5 px-6',
  large: 'py-3.5 px-7',
  icon: 'p-2.5',
};

const variants = {
  primary: 'bg-primary hashover:hover:bg-primary-hl',
  secondary: 'bg-secondary hashover:hover:bg-secondary-hl',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

function Button({
  type = 'button',
  size = 'medium',
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cls(
        'flex justify-center items-center',
        'relative overflow-hidden rounded-full',
        'cursor-default md:cursor-pointer',
        'text-white stroke-white fill-white',
        'transition duration-200',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
