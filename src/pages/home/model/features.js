import { BadgeCheckIcon, HeadsetIcon, PackageIcon, TrophyIcon } from '../../../shared/ui';

// icon — сам компонент (без < />), отрисуем его в Features с нужным размером
export const features = [
    { title: 'High Quality', description: 'crafted from top materials', icon: TrophyIcon },
    { title: 'Warranty Protection', description: 'Over 2 years', icon: BadgeCheckIcon },
    { title: 'Free Shipping', description: 'Order over 150 $', icon: PackageIcon },
    { title: '24 / 7 Support', description: 'Dedicated support', icon: HeadsetIcon },
];
