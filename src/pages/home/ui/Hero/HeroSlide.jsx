import { ProductPreviewCard } from '../../../../entities/product';
import { cn } from '../../../../shared/lib';

// Картинка слайда с карточкой товара. Карточка видна только у активного слайда
export const HeroSlide = ({ image, product, isActive }) => (
    <div className="relative h-80 sm:h-112 lg:h-136">
        <img src={image} alt={product.name} className="object-cover size-full" />
        <ProductPreviewCard
            name={product.name}
            description={product.description}
            price={product.price}
            className={cn(
                'absolute right-4 bottom-4 transition-opacity duration-500 sm:right-12 sm:bottom-12',
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
        />
    </div>
);
