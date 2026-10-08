import { cn } from '../../../../shared/lib';

export const ArticleCard = ({ image, title, date, href = '#', className = '' }) => (
    <article className={cn('bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)]', className)}>
        <a href={href} className="group block">
            <div className="aspect-[392/257] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-2 px-4 pt-4 pb-6">
                <h3 className="text-xl font-medium text-dark group-hover:text-primary transition-colors">{title}</h3>
                <time className="text-xs text-gray">{date}</time>
            </div>
        </a>
    </article>
);
