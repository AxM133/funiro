import { useInView } from '../../lib';
import { Appear } from './Appear';

// Appear, который сам следит за экраном: появляется, когда доехал до него при прокрутке.
// Принимает всё то же, что Appear (from, delay, duration, blur, as, className).
export const Reveal = (props) => {
    const [ref, inView] = useInView();

    return <Appear ref={ref} show={inView} {...props} />;
};
