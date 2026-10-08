import { cn } from '../../../../shared/lib';
import { Badge, Button, HeartIcon, Price, ShareIcon } from '../../../../shared/ui';

export const ProductCard = ({
    image,
    name,
    description,
    price,
    oldPrice,
    discount,
    isNew = false,
    onAddToCart,
    onShare,
    onLike,
    className = '',
}) => (
    <article className={cn('group relative overflow-hidden bg-card', className)}>
        <div className="relative aspect-[285/301]">
            <img src={image} alt={name} className="size-full object-cover" />
            {discount && <Badge variant="discount" className="absolute top-6 right-6">-{discount}%</Badge>}
            {!discount && isNew && <Badge variant="new" className="absolute top-6 right-6">New</Badge>}
        </div>

        <div className="flex flex-col gap-2 px-4 pt-4 pb-7">
            <h3 className="text-2xl font-semibold text-dark">{name}</h3>
            <p className="text-base text-gray">{description}</p>
            <Price value={price} oldValue={oldPrice} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-dark/70 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            <Button variant="white" onClick={onAddToCart}>Add to cart</Button>
            <div className="flex items-center gap-5 text-base font-semibold text-white">
                <button type="button" onClick={onShare} className="flex items-center gap-1 cursor-pointer hover:text-primary">
                    <ShareIcon size={16} /> Share
                </button>
                <button type="button" onClick={onLike} className="flex items-center gap-1 cursor-pointer hover:text-primary">
                    <HeartIcon size={16} /> Like
                </button>
            </div>
        </div>
    </article>
);
