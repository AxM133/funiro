import { cn } from '../../lib';

// Окно карусели: обрезает всё лишнее, внутри лента слайдов в ряд.
// @container нужен, чтобы слайды могли задавать ширину от ширины карусели (единица cqw).
export const Carousel = ({ viewportRef, children, className = '' }) => (
    <div ref={viewportRef} className={cn('@container overflow-hidden', className)}>
        <div className="flex">{children}</div>
    </div>
);

// Ширину и отступ слайда задаёт тот, кто использует карусель, через className
export const CarouselSlide = ({ children, className = '' }) => (
    <div className={cn('min-w-0 shrink-0 grow-0', className)}>{children}</div>
);
