// Временные данные. Потом они будут приходить с сервера.
const image = (id) => `https://images.unsplash.com/photo-${id}?w=784&h=514&fit=crop&q=80`;

export const articles = [
    { id: 1, title: 'How to create a living room to love', date: '20 jan 2020', image: image('1484101403633-562f891dc89a') },
    { id: 2, title: 'Solution for clean look working space', date: '10 jan 2020', image: image('1524758631624-e2822e304c36') },
    { id: 3, title: 'Make your cooking activity more fun with good setup', date: '20 jan 2020', image: image('1556912172-45b7abe8b7e1') },
    { id: 4, title: 'Shelves that make your walls tell a story', date: '5 feb 2020', image: image('1594026112284-02bb6f3352fe') },
    { id: 5, title: 'Bring warm colors into a minimalist interior', date: '18 feb 2020', image: image('1618220179428-22790b461013') },
    { id: 6, title: 'Soft textures for a cozy living room', date: '2 mar 2020', image: image('1631679706909-1844bbd07221') },
];
