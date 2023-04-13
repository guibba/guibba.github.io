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
        className="rounded-full blur-sm hover:blur-0 p-8 opacity-30 hover:opacity-50 transition duration-1000"
      />
    </div>
  );
}

export default Avatar;
