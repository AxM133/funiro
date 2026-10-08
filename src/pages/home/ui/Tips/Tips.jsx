import { ArticleCard } from '../../../../entities/article';
import {
    Carousel,
    CarouselSlide,
    ChevronLeftIcon,
    ChevronRightIcon,
    Container,
    Dots,
    IconButton,
    Reveal,
    SectionTitle,
    useCarousel,
} from '../../../../shared/ui';
import { articles } from '../../model/articles';

export const Tips = () => {
    // Без зацикливания: видно 3 статьи из 6, поэтому позиций (и точек) 4
    const { viewportRef, active, snapCount, scrollPrev, scrollNext, scrollTo } = useCarousel({ loop: false });

    return (
        <section className="pt-14 pb-8">
            <Container>
                <Reveal>
                    <SectionTitle title="Tips & Tricks" className="mb-8" />
                </Reveal>

                <Reveal delay={150} className="relative">
                    {/* -ml-8 компенсирует pl-8 у первого слайда, чтобы карточки начинались ровно у края контейнера.
                        pt-2 pb-6 у слайдов — место для тени карточки, иначе её обрежет overflow-hidden карусели */}
                    <Carousel viewportRef={viewportRef} className="-ml-8">
                        {articles.map(({ id, ...article }) => (
                            <CarouselSlide key={id} className="basis-[85%] pt-2 pb-6 pl-8 sm:basis-1/2 lg:basis-1/3">
                                <ArticleCard {...article} className="h-full" />
                            </CarouselSlide>
                        ))}
                    </Carousel>

                    {/* Стрелки на десктопе — по центру карточек, на краях контейнера.
                        На экранах уже 1340px их середина ушла бы за край, поэтому там они стоят внутри.
                        hidden висит на обёртках: у IconButton свой inline-flex */}
                    <div className="absolute hidden -translate-y-1/2 top-[calc(50%-0.5rem)] left-2 lg:block min-[1340px]:left-0 min-[1340px]:-translate-x-1/2">
                        <IconButton label="Предыдущие статьи" variant="white" onClick={scrollPrev} disabled={active === 0}>
                            <ChevronLeftIcon size={20} />
                        </IconButton>
                    </div>
                    <div className="absolute hidden -translate-y-1/2 top-[calc(50%-0.5rem)] right-2 lg:block min-[1340px]:right-0 min-[1340px]:translate-x-1/2">
                        <IconButton
                            label="Следующие статьи"
                            variant="white"
                            onClick={scrollNext}
                            disabled={active === snapCount - 1}
                        >
                            <ChevronRightIcon size={20} />
                        </IconButton>
                    </div>
                </Reveal>

                <Reveal delay={300}>
                    <Dots count={snapCount} active={active} onChange={scrollTo} className="justify-center mt-6" />
                </Reveal>
            </Container>
        </section>
    );
};
