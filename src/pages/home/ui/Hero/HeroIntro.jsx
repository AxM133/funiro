import { Button, Container, Reveal } from '../../../../shared/ui';

// Текстовая карточка. На десктопе висит поверх карусели и закрывает предыдущий слайд матовым стеклом.
// Появление: сначала сама карточка, затем по очереди заголовок, текст и кнопка
export const HeroIntro = () => (
    <Container className="lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-12 lg:z-20">
        <Reveal
            duration={1000}
            className="flex flex-col items-start gap-6 p-8 bg-white/80 backdrop-blur-lg sm:p-12 lg:pointer-events-auto lg:min-h-136 lg:w-5/12 lg:justify-center lg:py-16"
        >
            <Reveal as="h1" delay={200} className="text-4xl font-bold leading-tight text-dark sm:text-5xl lg:text-6xl">
                High-Quality Furniture Just For You
            </Reveal>
            <Reveal as="p" delay={350} className="max-w-md text-lg text-gray">
                Our furniture is made from selected and best quality materials that are suitable for your dream home
            </Reveal>
            <Reveal delay={500} className="w-full mt-6 sm:w-auto">
                <Button size="lg" className="w-full sm:px-32">
                    Shop Now
                </Button>
            </Reveal>
        </Reveal>
    </Container>
);
