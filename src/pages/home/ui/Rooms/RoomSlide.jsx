import { RoomCard } from '../../../../entities/room';
import { cn } from '../../../../shared/lib';

// position — где слайд стоит относительно активного:
// 'active' — сам активный, 'after' — справа от него, 'before' — слева (за краем, не виден).
//
// На десктопе активный слайд шире и выше остальных (404×582 против 372×486).
// Embla считает позиции по размерам коробок слайдов, поэтому коробки у всех одинаковые,
// а увеличиваем только содержимое. Чтобы широкий активный не налез на соседа,
// слайды справа от него сдвигаем на разницу в ширине (32px = translate-x-8).
export const RoomSlide = ({ room, position }) => (
    <div
        className={cn(
            'transition-[width,height,transform] duration-500 ease-out',
            'h-96 w-full sm:h-120',
            position === 'active' ? 'lg:h-[582px] lg:w-[404px]' : 'lg:h-[486px] lg:w-[372px]',
            position === 'after' && 'lg:translate-x-8',
        )}
    >
        <RoomCard {...room} showDetails={position === 'active'} className="size-full" />
    </div>
);
