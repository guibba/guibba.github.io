import React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size: 'small' | 'medium' | 'large' | 'icon';
  variant: 'primary' | 'secondary' | 'bubble' | 'selectedBubble';
}

function Button(props: Props) {
  const classes = [
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'overflow-hidden',
    'text-white',
    'md:cursor-pointer',
  ];

  switch (props.size) {
    case 'small': {
      classes.push('rounded-3xl', 'py-2', 'px-5');
      break;
    }
    case 'medium': {
      classes.push('rounded-3xl', 'py-3', 'px-6');
      break;
    }
    case 'large': {
      classes.push('rounded-3xl', 'py-4', 'px-7');
      break;
    }
    case 'icon': {
      classes.push('rounded-full', 'p-2', 'min-h-350', 'min-w-350');
      break;
    }
  }

  switch (props.variant) {
    case 'primary': {
      classes.push('bg-[#ea7070]', 'hover:bg-[#fa8c8c]');
      break;
    }
    case 'secondary': {
      classes.push('bg-[#787878]', 'hover:bg-[#a7a6a6]');
      break;
    }
    case 'bubble': {
      classes.push(
        'bg-bubble',
        'shadow-bubble',
        'rounded-full',
        'blur-[0.5px]',
        'supports-[hover]:hover:bg-[#ea7070]'
      );
      break;
    }
    case 'selectedBubble': {
      classes.push(
        'bg-[#ea7070]',
        'shadow-bubble',
        'rounded-full',
        'blur-[0.5px]'
      );
      break;
    }
  }

  classes.push(
    "before:content-['']",
    'before:absolute',
    'before:top-0',
    'before:left-[-200%]',
    'before:w-[200%]',
    'before:h-full',
    'before:bg-shine',
    'hover:before:animate-shine'
  );

  return (
    <a {...props} className={`${classes.join(' ')} ${props.className || ''}`}>
      {props.children}
    </a>
  );
}

export default Button;
