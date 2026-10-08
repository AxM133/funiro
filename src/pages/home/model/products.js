// Временные данные. Потом они будут приходить с сервера.
const image = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=630&fit=crop&q=80`;

export const products = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: image('1567538096630-e0c55bd6374c') },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, image: image('1592078615290-033ee584e267') },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, discount: 50, image: image('1540574163026-643ea20ade25') },
    { id: 4, name: 'Respira', description: 'Minimalist dining set', price: 500000, isNew: true, image: image('1519710164239-da123dc03ef4') },
    { id: 5, name: 'Grifo', description: 'Night lamp', price: 1500000, image: image('1507473885765-e6ed057f782c') },
    { id: 6, name: 'Muggo', description: 'Small mug', price: 150000, isNew: true, image: image('1514228742587-6b1558fcca3d') },
    { id: 7, name: 'Pingky', description: 'Cute bed set', price: 7000000, oldPrice: 14000000, discount: 50, image: image('1522771739844-6a9f6d5f14af') },
    { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 500000, isNew: true, image: image('1485955900006-10f4d324d411') },
    { id: 9, name: 'Stoolo', description: 'Wooden bar stool', price: 450000, image: image('1503602642458-232111445657') },
    { id: 10, name: 'Amber', description: 'Cozy armchair', price: 3200000, oldPrice: 4000000, discount: 20, image: image('1550226891-ef816aed4a98') },
    { id: 11, name: 'Nordic', description: 'Grey 3-seat sofa', price: 8500000, isNew: true, image: image('1484101403633-562f891dc89a') },
    { id: 12, name: 'Shelfy', description: 'Wall shelf set', price: 1200000, image: image('1594026112284-02bb6f3352fe') },
];
