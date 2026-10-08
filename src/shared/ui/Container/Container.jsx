import { cn } from '../../lib';

export const Container = ({ children, as: Tag = 'div', className = '' }) => (
    <Tag className={cn('mx-auto w-full max-w-[1272px] px-4', className)}>{children}</Tag>
);
