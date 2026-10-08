import { cn } from '../../lib';

export const Avatar = ({ src, alt = '', size = 40, className = '' }) => (
    <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={cn('rounded-full object-cover', className)}
        style={{ width: size, height: size }}
    />
);
