import { cn } from '../../lib';

const variantClasses = {
    discount: 'bg-danger',
    new: 'bg-success',
};

export const Badge = ({ children, variant = 'discount', className = '' }) => (
    <span
        className={cn(
            'inline-flex items-center justify-center size-12 rounded-full text-white text-sm font-medium',
            variantClasses[variant],
            className,
        )}
    >
        {children}
    </span>
);
