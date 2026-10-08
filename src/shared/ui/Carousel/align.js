import { BREAKPOINT_LG, CONTAINER_MAX_WIDTH, CONTAINER_PADDING } from '../../config';

// Варианты для опции align в useCarousel: отступ активного слайда от левого края карусели в px.

// Телефон: слайд по центру, краешки соседей видны с обеих сторон.
// Десктоп: правый край слайда совпадает с правым краем Container,
//          слева выглядывает предыдущий слайд, справа — следующий.
export const alignToContainerEnd = (viewSize, snapSize) => {
    if (viewSize < BREAKPOINT_LG) return (viewSize - snapSize) / 2;

    const sideGap = Math.max(CONTAINER_PADDING, (viewSize - CONTAINER_MAX_WIDTH) / 2 + CONTAINER_PADDING);
    return viewSize - sideGap - snapSize;
};
