import { useState } from 'react';
import { Button, Container, Reveal, SectionTitle } from '../../../../shared/ui';
import { ProductCard } from '../../../../entities/product';
import { products } from '../../model/products';

const INITIAL_COUNT = 8; // сколько товаров видно сразу (2 ряда по 4)
const STEP = 4; // сколько добавляет Show More (ещё один ряд)

export const Products = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const visibleProducts = products.slice(0, visibleCount);
    const hasMore = visibleCount < products.length;

    const showMore = () => setVisibleCount((count) => count + STEP);

    return (
        <section className="py-14">
            <Container>
                <Reveal>
                    <SectionTitle title="Our Products" className="mb-8" />
                </Reveal>

                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Каждая карточка следит за экраном сама: ряд появляется волной слева направо,
                        а новые карточки после Show More тоже выезжают красиво */}
                    {visibleProducts.map(({ id, ...product }, index) => (
                        <Reveal as="li" key={id} delay={(index % 4) * 100}>
                            {/* Корзины, шаринга и избранного пока нет — когда появятся, это будут features */}
                            <ProductCard
                                {...product}
                                onAddToCart={() => console.log('В корзину:', id)}
                                onShare={() => console.log('Поделиться:', id)}
                                onLike={() => console.log('В избранное:', id)}
                            />
                        </Reveal>
                    ))}
                </ul>

                {hasMore && (
                    <Reveal className="flex justify-center mt-8">
                        <Button variant="outline" className="px-20" onClick={showMore}>
                            Show More
                        </Button>
                    </Reveal>
                )}
            </Container>
        </section>
    );
};
