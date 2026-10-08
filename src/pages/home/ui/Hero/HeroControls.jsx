import { ChevronLeftIcon, ChevronRightIcon, Container, Dots, IconButton, Reveal } from '../../../../shared/ui';

// Точки и стрелки: на телефоне под каруселью, на десктопе над ней справа от карточки
export const HeroControls = ({ count, active, onSelect, onPrev, onNext }) => (
    <Container className="order-last lg:order-first lg:grid lg:grid-cols-12">
        <Reveal delay={600} className="flex items-center justify-between h-24 lg:col-span-7 lg:col-start-6 lg:h-32 lg:pl-8">
            <Dots count={count} active={active} onChange={onSelect} />
            <div className="flex gap-4">
                <IconButton label="Предыдущий слайд" variant="soft" size="lg" onClick={onPrev}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton label="Следующий слайд" variant="primary" size="lg" onClick={onNext}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </Reveal>
    </Container>
);
