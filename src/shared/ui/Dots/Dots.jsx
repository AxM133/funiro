import { cn } from '../../lib';

export const Dots = ({ count, active = 0, onChange, className = '' }) => (
    <div className={cn('flex items-center gap-3', className)}>
        {Array.from({ length: count }, (_, index) => {
            const isActive = index === active;

            return (
                <button
                    key={index}
                    type="button"
                    aria-label={`Слайд ${index + 1}`}
                    aria-current={isActive}
                    onClick={() => onChange?.(index)}
                    className={cn(
                        'flex items-center justify-center rounded-full cursor-pointer',
                        isActive ? 'size-6 border border-primary' : 'size-3',
                    )}
                >
                    <span className={cn('size-2.5 rounded-full', isActive ? 'bg-primary' : 'bg-gray-light/50')} />
                </button>
            );
        })}
    </div>
);
