import { cn } from '../../lib';

export const Logo = ({ href = '/', className = '' }) => (
    <a href={href} className={cn('text-2xl font-bold text-black', className)}>
        Funiro.
    </a>
);
