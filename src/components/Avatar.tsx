import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  imageSource: string;
}

function Avatar({ imageSource, className = '', ...props }: AvatarProps) {
  return (
    <div className={`bubble ${className}`} {...props}>
      <img
        src={imageSource}
        alt="Avatar"
        className="rounded-full p-8 opacity-30 blur-sm transition duration-1000 hover:opacity-50 hover:blur-0"
      />
    </div>
  );
}

export default Avatar;
