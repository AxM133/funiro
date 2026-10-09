import { useRef, useState } from 'react';
import { cn, useClickOutside } from '../../lib';
import { NavItem } from '../NavItem/NavItem';

// Пункт навигации со всплывающим списком ссылок.
// Мышь: открывается при наведении. Тач: открывается по тапу.
// Состояние хранится внутри: клик по другому Dropdown — это клик снаружи,
// поэтому одновременно открыт только один список.
export const Dropdown = ({ label, href = '#', items = [], className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickOutside({ ref, onClose: () => setIsOpen(false), enabled: isOpen });

    const handleToggle = (event) => {
        event.preventDefault();
        setIsOpen((prev) => !prev);
    };

    // pointerType отсекает тач: на телефоне тап тоже вызывает pointerenter,
    // и без проверки список открылся бы и сразу закрылся кликом.
    const handlePointerEnter = (event) => {
        if (event.pointerType === 'mouse') setIsOpen(true);
    };

    const handlePointerLeave = (event) => {
        if (event.pointerType === 'mouse') setIsOpen(false);
    };

    return (
        <div
            ref={ref}
            className={cn('relative', className)}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <NavItem
                href={href}
                hasDropdown
                isOpen={isOpen}
                onClick={handleToggle}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {label}
            </NavItem>

            {/* pt-4 вместо mt-4: прозрачный отступ остаётся частью div,
                поэтому курсор не «теряет» ховер по пути от кнопки к списку */}
            {isOpen && (
                <div className="absolute left-0 top-full z-50 pt-4">
                    <ul className="min-w-48 rounded-xl bg-white p-2 shadow-lg">
                        {items.map(({ label: itemLabel, href: itemHref = '#' }) => (
                            <li key={itemLabel}>
                                <a
                                    href={itemHref}
                                    className="block rounded-lg px-4 py-2 text-sm text-dark hover:bg-neutral-100 hover:text-primary transition-colors"
                                >
                                    {itemLabel}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
