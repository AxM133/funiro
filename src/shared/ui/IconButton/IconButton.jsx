import { cn } from '../../lib';

const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark', // Активная стрелка слайдера в hero
    soft: 'bg-primary/20 text-primary hover:bg-primary/30', // Неактивная стрелка слайдера в hero
    white: 'bg-white text-primary shadow-md hover:bg-primary-light', // Стрелки слайдеров комнат и статей
    ghost: 'bg-transparent text-dark hover:text-primary', // Иконки в шапке
};

const sizeClasses = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
};

export const IconButton = ({ children, label, variant = 'ghost', size = 'md', type = 'button', className = '', ...props }) => (
    <button
        type={type}
        aria-label={label}
        className={cn(
            'inline-flex items-center justify-center rounded-full transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
            variantClasses[variant],
            sizeClasses[size],
            className,
        )}
        {...props}
    >
        {children}
    </button>
);
