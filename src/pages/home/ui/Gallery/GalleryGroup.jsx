import { Appear } from '../../../../shared/ui';
import { GalleryPhoto } from './GalleryPhoto';

const STEP = 160; // мс между «волнами» появления

// Два ряда фото: верхний прижат к низу (items-end), нижний к верху (items-start).
// side — с какой стороны от центрального фото стоит группа.
// show — пора ли появляться (решает Gallery, один раз на весь коллаж).
export const GalleryGroup = ({ top, bottom, side, show }) => {
    // Насколько фото далеко от центра коллажа: 1 — ближайшее, 2 — следующее
    const distance = (index, row) => (side === 'left' ? row.length - index : index + 1);

    // Фото «раздаются» из центра: стартуют сдвинутыми к центру и с наклоном, а затем разъезжаются на свои места.
    // Чем дальше от центра, тем позже. Нижний ряд — на полшага позже верхнего
    const renderRow = (row, rowShift) =>
        row.map(({ id, ...photo }, index) => (
            <Appear
                key={id}
                show={show}
                from={side === 'left' ? 'tilt-right' : 'tilt-left'}
                blur
                duration={1100}
                delay={(distance(index, row) + rowShift) * STEP}
                className="shrink-0"
            >
                <GalleryPhoto {...photo} />
            </Appear>
        ));

    return (
        <div className="flex flex-col gap-[1.11vw]">
            <div className="flex items-end gap-[1.11vw]">{renderRow(top, 0)}</div>
            <div className="flex items-start gap-[1.11vw]">{renderRow(bottom, 0.5)}</div>
        </div>
    );
};
