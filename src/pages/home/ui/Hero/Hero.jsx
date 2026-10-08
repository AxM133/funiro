import { alignToContainerEnd, Carousel, CarouselSlide, Reveal, useCarousel } from '../../../../shared/ui';
import { slides } from '../../model/slides';
import { HeroControls } from './HeroControls';
import { HeroIntro } from './HeroIntro';
import { HeroSlide } from './HeroSlide';

export const Hero = () => {
    const { viewportRef, active, scrollPrev, scrollNext, scrollTo } = useCarousel({
        align: alignToContainerEnd,
        autoplay: 5000,
    });

    return (
        <section className="relative flex flex-col pb-10 overflow-hidden lg:pb-16">
            {/* Бежевая подложка сверху слева, чисто декоративная */}
            <div className="absolute top-0 left-0 hidden w-2/3 h-32 -z-10 bg-primary-light lg:block" />

            <HeroIntro />

            <HeroControls
                count={slides.length}
                active={active}
                onSelect={scrollTo}
                onPrev={scrollPrev}
                onNext={scrollNext}
            />

            {/* Карусель выезжает справа чуть позже карточки */}
            <Reveal from="right" delay={250} duration={1300} className="mt-8 lg:mt-0">
                <Carousel viewportRef={viewportRef}>
                    {slides.map((slide, index) => (
                        <CarouselSlide
                            key={slide.id}
                            className="basis-[85%] pl-4 lg:basis-[calc((min(100cqw,1272px)-32px)*0.75+32px)] lg:pl-8"
                        >
                            <HeroSlide image={slide.image} product={slide.product} isActive={index === active} />
                        </CarouselSlide>
                    ))}
                </Carousel>
            </Reveal>
        </section>
    );
};
