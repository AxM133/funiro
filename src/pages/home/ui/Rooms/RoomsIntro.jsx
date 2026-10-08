import { Button, Reveal } from '../../../../shared/ui';

export const RoomsIntro = () => (
    <Reveal from="left" className="flex flex-col items-start gap-2 lg:w-105 lg:shrink-0">
        <h2 className="text-3xl font-bold leading-tight text-dark sm:text-4xl">50+ Beautiful rooms inspiration</h2>
        <p className="text-base text-gray">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <Button className="px-9 mt-4">Explore More</Button>
    </Reveal>
);
