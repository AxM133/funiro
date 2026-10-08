// Временные данные. Потом они будут приходить с сервера.
// width / height — размер фото на макете в px при ширине экрана 1440
const photo = (id, alt, width, height) => ({
    id,
    alt,
    width,
    height,
    image: `https://images.unsplash.com/photo-${id}?w=${width * 2}&h=${height * 2}&fit=crop&q=80`,
});

// Коллаж из трёх частей: левая группа, высокое фото по центру, правая группа.
// В группе два ряда: top прижат к низу, bottom к верху — между рядами ровная щель, снаружи «рваный» край
export const gallery = {
    left: {
        top: [
            photo('1594026112284-02bb6f3352fe', 'Wall shelves with decor', 203, 381),
            photo('1583847268964-b28dc8f51f92', 'Living room with framed art', 451, 311),
        ],
        bottom: [
            photo('1550226891-ef816aed4a98', 'Yellow armchair by the window', 311, 323),
            photo('1616486338812-3dadae4b4ace', 'Bright living room', 344, 241),
        ],
    },
    center: photo('1519710164239-da123dc03ef4', 'Dining table with a pendant lamp', 297, 393),
    right: {
        top: [
            photo('1616594039964-ae9021a400a0', 'Bedroom with a soft headboard', 290, 348),
            photo('1538688525198-9b88f6f53126', 'Lounge with armchairs', 290, 432),
        ],
        bottom: [
            photo('1485955900006-10f4d324d411', 'Plant in a mint pot', 178, 238),
            photo('1556912172-45b7abe8b7e1', 'Kitchen island with stools', 248, 192),
        ],
    },
};

// Все фото списком — для мобильной раскладки в две колонки.
// Колонки заполняются по порядку: сначала левая, потом правая. Порядок подобран так,
// чтобы суммарная высота фото делилась примерно пополам и колонки заканчивались вровень
export const galleryPhotos = [
    ...gallery.left.top,
    ...gallery.left.bottom,
    gallery.right.bottom[1],
    gallery.center,
    ...gallery.right.top,
    gallery.right.bottom[0],
];
