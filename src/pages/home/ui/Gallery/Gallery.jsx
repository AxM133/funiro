import { useInView } from '../../../../shared/lib';
import { Appear, Container, Reveal, SectionTitle } from '../../../../shared/ui';
import { gallery, galleryPhotos } from '../../model/gallery';
import { GalleryGroup } from './GalleryGroup';
import { GalleryPhoto } from './GalleryPhoto';

export const Gallery = () => {
    // Один наблюдатель на весь коллаж, а не на каждое фото: так все фото появляются
    // единой волной от центра к краям, а не каждое само по себе
    const [collageRef, collageInView] = useInView({ threshold: 0.25 });

    return (
        <section className="pt-14 pb-16 overflow-hidden">
            <Container>
                <Reveal>
                    <SectionTitle subtitle="Share your setup with" title="#FuniroFurniture" className="mb-6 md:mb-4" />
                </Reveal>
            </Container>

            {/* Коллаж на всю ширину экрана: от планшета и шире. Лишнее справа обрезается */}
            <div ref={collageRef} className="hidden md:flex items-center gap-[1.11vw]">
                <GalleryGroup {...gallery.left} side="left" show={collageInView} />
                {/* Центральное фото появляется первым — с него начинается волна */}
                <Appear show={collageInView} from="zoom" blur duration={1100} className="shrink-0">
                    <GalleryPhoto {...gallery.center} />
                </Appear>
                <GalleryGroup {...gallery.right} side="right" show={collageInView} />
            </div>

            {/* Телефон: две колонки, как в Pinterest. Каждое фото проявляется, когда до него доскроллили */}
            <Container className="gap-4 columns-2 md:hidden">
                {galleryPhotos.map(({ id, ...photo }) => (
                    <Reveal key={id} blur className="mb-4 break-inside-avoid">
                        <GalleryPhoto {...photo} fluid />
                    </Reveal>
                ))}
            </Container>
        </section>
    );
};
