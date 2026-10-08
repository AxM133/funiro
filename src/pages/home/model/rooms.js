// Временные данные. Потом они будут приходить с сервера.
const image = (id) => `https://images.unsplash.com/photo-${id}?w=808&h=1164&fit=crop&q=80`;

export const rooms = [
    { id: 1, number: 1, category: 'Bed Room', title: 'Inner Peace', image: image('1522771739844-6a9f6d5f14af') },
    { id: 2, number: 2, category: 'Dining Room', title: 'Bright Morning', image: image('1519710164239-da123dc03ef4') },
    { id: 3, number: 3, category: 'Living Room', title: 'Warm Corner', image: image('1618220179428-22790b461013') },
    { id: 4, number: 4, category: 'Living Room', title: 'Soft Neutrals', image: image('1631679706909-1844bbd07221') },
];
