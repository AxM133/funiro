import { useEffect, useRef, useState } from 'react';

// Возвращает [ref, inView]: inView становится true, когда элемент с ref доехал до экрана.
// once = true — сработать один раз и больше не следить (появился и остался).
// rootMargin по умолчанию срабатывает чуть раньше нижнего края экрана, чтобы анимацию было видно целиком.
export const useInView = ({ threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, inView];
};
