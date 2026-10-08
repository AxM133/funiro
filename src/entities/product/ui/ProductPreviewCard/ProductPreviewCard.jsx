import { cn, formatPrice } from '../../../../shared/lib';
import { ArrowRightIcon } from '../../../../shared/ui';

// Стеклянная карточка товара поверх слайда в hero (Bohauss)
export const ProductPreviewCard = ({ name, description, price, href = '#', className = '' }) => (
    <a
        href={href}
        className={cn('group flex flex-col gap-1 w-full max-w-72 p-6 bg-white/70 backdrop-blur-md', className)}
    >
        <h3 className="text-xl font-semibold text-dark">{name}</h3>
        <p className="text-xs text-gray">{description}</p>
        <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-semibold text-dark">{formatPrice(price)}</span>
            <ArrowRightIcon size={18} className="text-dark transition-transform group-hover:translate-x-1" />
        </div>
    </a>
);
