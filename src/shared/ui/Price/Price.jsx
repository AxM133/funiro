import { cn, formatPrice } from '../../lib';

export const Price = ({ value, oldValue, className = '' }) => (
    <div className={cn('flex items-center gap-4', className)}>
        <span className="text-xl font-semibold text-dark">{formatPrice(value)}</span>
        {oldValue && <s className="text-base text-gray-light">{formatPrice(oldValue)}</s>}
    </div>
);
