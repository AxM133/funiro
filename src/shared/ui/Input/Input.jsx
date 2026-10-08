import { cn } from '../../lib';

const variantClasses = {
    filled: 'bg-card [&_input]:placeholder:text-gray-light', // Поиск в шапке
    soft: 'bg-primary-light [&_input]:placeholder:text-gray', // Email в футере
};

export const Input = ({ icon, variant = 'filled', className = '', inputClassName = '', ...props }) => (
    <label className={cn('flex items-center gap-3 px-4 h-11 text-sm text-dark', variantClasses[variant], className)}>
        {icon && <span className="shrink-0">{icon}</span>}
        <input className={cn('w-full bg-transparent outline-none', inputClassName)} {...props} />
    </label>
);
