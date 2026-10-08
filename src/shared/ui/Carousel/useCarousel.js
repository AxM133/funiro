import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Вся логика карусели в одном месте. Компонент получает отсюда:
// viewportRef — повесить на <Carousel>, active — номер активного слайда, snapCount — сколько точек рисовать,
// scrollPrev / scrollNext / scrollTo — для стрелок и точек.
// autoplay — задержка в мс или false, если автопрокрутка не нужна.
export const useCarousel = ({ loop = true, align = 'start', autoplay = false } = {}) => {
    const plugins = useMemo(
        () => (autoplay ? [Autoplay({ delay: autoplay, stopOnInteraction: false, stopOnMouseEnter: true })] : []),
        [autoplay],
    );
    const [viewportRef, api] = useEmblaCarousel({ loop, align }, plugins);
    const [active, setActive] = useState(0);
    const [snapCount, setSnapCount] = useState(0);

    // Слайд переключают стрелки, свайп и автопрокрутка, поэтому номер активного узнаём из события Embla.
    // snapCount — сколько позиций у карусели (= сколько рисовать точек). Совпадает с числом слайдов
    // только в бесконечной карусели: если видно 3 из 6 без зацикливания, позиций 4.
    // Пересчитывается при reInit — например, когда на другой ширине экрана видно другое число слайдов.
    useEffect(() => {
        if (!api) return;

        const onSelect = () => setActive(api.selectedScrollSnap());
        const onReInit = () => {
            onSelect();
            setSnapCount(api.scrollSnapList().length);
        };

        onReInit();
        api.on('select', onSelect).on('reInit', onReInit);

        return () => {
            api.off('select', onSelect).off('reInit', onReInit);
        };
    }, [api]);

    // После ручного переключения перезапускаем таймер, чтобы слайд не уехал сразу после клика
    const withReset = useCallback(
        (scroll) => {
            if (!api) return;
            scroll(api);
            api.plugins().autoplay?.reset();
        },
        [api],
    );

    const scrollPrev = useCallback(() => withReset((carousel) => carousel.scrollPrev()), [withReset]);
    const scrollNext = useCallback(() => withReset((carousel) => carousel.scrollNext()), [withReset]);
    const scrollTo = useCallback((index) => withReset((carousel) => carousel.scrollTo(index)), [withReset]);

    return { viewportRef, active, snapCount, scrollPrev, scrollNext, scrollTo };
};
