import { Container, FeatureItem, Reveal } from '../../../../shared/ui';
import { features } from '../../model/features';

// Полоса преимуществ под Hero.
// Телефон — столбик, планшет — 2×2, десктоп — в ряд от края до края контейнера.
// Пункты появляются по очереди слева направо
export const Features = () => (
    <section className="py-16 lg:py-24">
        <Container>
            <ul className="grid gap-10 sm:grid-cols-2 lg:flex lg:justify-between">
                {features.map(({ title, description, icon: Icon }, index) => (
                    <Reveal as="li" key={title} delay={index * 120}>
                        <FeatureItem icon={<Icon size={40} strokeWidth={1.25} />} title={title} description={description} />
                    </Reveal>
                ))}
            </ul>
        </Container>
    </section>
);
