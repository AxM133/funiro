import { cn } from '../../../../shared/lib';
import { ArrowRightIcon } from '../../../../shared/ui';

// showDetails = false прячет подпись со стрелкой (остаётся только фото)
export const RoomCard = ({ image, number, category, title, href = '#', showDetails = true, className = '' }) => (
    <article className={cn('relative overflow-hidden', className)}>
        <img src={image} alt={title} className="size-full object-cover" />

        <div
            inert={!showDetails}
            className={cn(
                'absolute bottom-6 left-6 flex items-end transition-opacity duration-500',
                showDetails ? 'opacity-100' : 'opacity-0',
            )}
        >
            <div className="flex flex-col gap-2 p-8 bg-white/70 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-base font-medium text-gray">
                    {String(number).padStart(2, '0')}
                    <span className="h-px w-7 bg-gray" />
                    {category}
                </p>
                <h3 className="text-2xl font-semibold text-dark">{title}</h3>
            </div>
            <a
                href={href}
                aria-label={title}
                className="flex items-center justify-center size-12 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
                <ArrowRightIcon size={20} />
            </a>
        </div>
    </article>
);
