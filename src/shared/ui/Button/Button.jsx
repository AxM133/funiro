import { cn } from '../../lib';

const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark', // Оранжевая заливка: Shop Now, Explore More
    outline: 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white', // С контуром: Show More
    white: 'bg-white text-primary hover:bg-primary-light', // Белая кнопка: Add to cart
};

const sizeClasses = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-12 py-3 text-sm',
    lg: 'px-16 py-5 text-base',
};

export const Button = ({ children, variant = 'primary', size = 'md', type = 'button', className = '', ...props }) => {
    const classes = cn(
        'inline-flex items-center justify-center font-semibold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
    );

    return <button type={type} className={classes} {...props}>{children}</button>;
};
