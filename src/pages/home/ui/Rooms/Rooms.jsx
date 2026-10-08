import {
    Carousel,
    CarouselSlide,
    ChevronRightIcon,
    Container,
    Dots,
    IconButton,
    Reveal,
    useCarousel,
} from '../../../../shared/ui';
import { rooms } from '../../model/rooms';
import { RoomsIntro } from './RoomsIntro';
import { RoomSlide } from './RoomSlide';

// Где слайд стоит относительно активного (с учётом зацикливания)
const getPosition = (index, active, count) => {
    const offset = (index - active + count) % count;
    if (offset === 0) return 'active';
    if (offset === count - 1) return 'before';
    return 'after';
};

export const Rooms = () => {
    const { viewportRef, active, scrollNext, scrollTo } = useCarousel({ align: 'start' });

    return (
        <section className="py-14 overflow-hidden bg-primary-light lg:py-11">
            <Container className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <RoomsIntro />

                {/* На десктопе карусель выходит за правый край контейнера до края экрана.
                    Выезжает справа навстречу тексту */}
                <Reveal
                    from="right"
                    delay={150}
                    duration={1200}
                    className="relative min-w-0 lg:flex-1 lg:-mr-[calc((100vw-min(100vw,1272px))/2+16px)]"
                >
                    <Carousel viewportRef={viewportRef} className="lg:h-[582px]">
                        {rooms.map((room, index) => (
                            <CarouselSlide key={room.id} className="basis-[80%] pr-4 sm:basis-[60%] lg:basis-[396px] lg:pr-6">
                                <RoomSlide room={room} position={getPosition(index, active, rooms.length)} />
                            </CarouselSlide>
                        ))}
                    </Carousel>

                    {/* Стрелка только на десктопе — на правом краю второго слайда (404 + 24 + 372 = 800px),
                        но не дальше края экрана на узких десктопах. На телефоне листают свайпом.
                        hidden висит на обёртке: у IconButton свой inline-flex, и с ним hidden бы спорил */}
                    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 lg:block top-[291px] left-[min(800px,calc(100%-2.5rem))]">
                        <IconButton label="Следующая комната" variant="white" size="lg" onClick={scrollNext}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>

                    {/* Точки: на телефоне под каруселью, на десктопе — под вторым слайдом */}
                    <Dots
                        count={rooms.length}
                        active={active}
                        onChange={scrollTo}
                        className="mt-6 lg:absolute lg:mt-0 lg:top-[514px] lg:left-[428px]"
                    />
                </Reveal>
            </Container>
        </section>
    );
};
