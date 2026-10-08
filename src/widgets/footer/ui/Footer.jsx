import { Container, ContactItem, LinkList, Logo, MapPinIcon, PhoneIcon } from '../../../shared/ui';
import { SubscribeForm } from '../../../features/subscribe';

// Данные для колонок со ссылками. 
const linkColumns = [
    {
        title: 'Menu',
        links: [
            { label: 'Products', href: '#' },
            { label: 'Rooms', href: '#' },
            { label: 'Inspirations', href: '#' },
            { label: 'About Us', href: '#' },
            { label: 'Terms & Policy', href: '#' },
        ],
    },
    {
        title: 'Account',
        links: [
            { label: 'My Account', href: '#' },
            { label: 'Checkout', href: '#' },
            { label: 'My Cart', href: '#' },
            { label: 'My catalog', href: '#' },
        ],
    },
    {
        title: 'Stay Connected',
        links: [
            { label: 'Facebook', href: 'https://www.facebook.com/zuck' },
            { label: 'Instagram', href: 'https://www.instagram.com/zuck/' },
            { label: 'Twitter', href: 'https://www.x.com' }
        ],
    },
];

export const Footer = () => (
    <footer className='border-t border-gray-light/40 py-12'>
        <Container className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr]">
            <div className='flex flex-col gap-4'>
                <Logo />
                <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website.</p>

                <ContactItem icon={<MapPinIcon size={18} />} href={"https://maps.app.goo.gl/C4hwBvDqWUqi3r7s7"} >
                    Sawojajar Malang, Indonesia
                </ContactItem>

                <ContactItem icon={<PhoneIcon size={18} />} href="tel:+62894563455">
                    +6289 456 3455
                </ContactItem>

                <ContactItem href={"https://www.funiro.com"}>
                    www.funiro.com
                </ContactItem>
            </div>

            {/* Колонки 2–4: вывести через linkColumns.map(...) */}
            {linkColumns.map(({ title, links }) => (
                <LinkList key={title} title={title} links={links} />
            ))}

            {/* Колонка 5: подписка */}
            <div className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold text-dark">Stay Updated</h4>
                <SubscribeForm onSubmit={(email) => console.log('Подписка:', email)} />
            </div>
        </Container>
    </footer>
)
