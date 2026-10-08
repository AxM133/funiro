import { cn } from '../../../../shared/lib';

const DESIGN_WIDTH = 1440; // ширина экрана на макете
const toVw = (px) => `${(px / DESIGN_WIDTH) * 100}vw`;

// fluid = false (коллаж): размер в vw — фото растёт и уменьшается вместе с экраном, пропорции макета сохраняются.
// fluid = true (телефон): на всю ширину колонки, высота по пропорциям фото.
// Размеры у каждого фото свои и считаются из данных, поэтому это inline style, а не классы Tailwind:
// Tailwind собирает классы заранее и не умеет делать их из переменных.
export const GalleryPhoto = ({ image, alt, width, height, fluid = false, className = '' }) => (
    <div
        className={cn('group shrink-0 overflow-hidden', fluid && 'w-full', className)}
        style={fluid ? { aspectRatio: `${width} / ${height}` } : { width: toVw(width), height: toVw(height) }}
    >
        <img
            src={image}
            alt={alt}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
    </div>
);
