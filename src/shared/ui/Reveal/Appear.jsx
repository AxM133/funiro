import { cn } from '../../lib';

// Откуда появляется элемент: в скрытом состоянии он сдвинут/уменьшен/наклонён и прозрачен.
// motion-safe: — анимация только для тех, у кого в системе НЕ включено «уменьшить движение».
// Остальные сразу видят содержимое на месте.
const hiddenClasses = {
    up: 'motion-safe:translate-y-10',
    down: 'motion-safe:-translate-y-10',
    left: 'motion-safe:-translate-x-12',
    right: 'motion-safe:translate-x-12',
    zoom: 'motion-safe:scale-90',
    'tilt-left': 'motion-safe:-translate-x-10 motion-safe:-rotate-3 motion-safe:scale-95',
    'tilt-right': 'motion-safe:translate-x-10 motion-safe:rotate-3 motion-safe:scale-95',
};

// Тупой компонент: показывает содержимое, когда show = true. Когда показывать — решает тот, кто использует.
// delay — задержка в мс (для появления «по очереди»), blur — лёгкое размытие в начале.
export const Appear = ({
    show,
    from = 'up',
    delay = 0,
    duration = 900,
    blur = false,
    as: Tag = 'div',
    ref,
    className = '',
    children,
    ...props
}) => (
    <Tag
        ref={ref}
        className={cn(
            'transition-[opacity,translate,scale,rotate,filter] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
            !show && cn('motion-safe:opacity-0', hiddenClasses[from], blur && 'motion-safe:blur-sm'),
            className,
        )}
        style={{ transitionDuration: `${duration}ms`, transitionDelay: show ? `${delay}ms` : '0ms' }}
        {...props}
    >
        {children}
    </Tag>
);
