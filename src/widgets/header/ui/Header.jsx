import { Logo, Container, NavItem, Input, SearchIcon, IconButton, HeartIcon, CartIcon, Avatar } from '../../../shared/ui';

const navItems = [
    { label: 'Products', href: '#', hasDropdown: true },
    { label: 'Rooms', href: '#', hasDropdown: true },
    { label: 'Inspirations', href: '#', hasDropdown: false },
];

export const Header = () => (
    <header className="py-6">
        <Container className='flex items-center gap-10'>
            <Logo />

            <nav className='flex items-center gap-8 hidden md:flex items-center gap-8'>
                {navItems.map(({ label, href, hasDropdown }) => (
                    <NavItem key={label} href={href} hasDropdown={hasDropdown} >{label}</NavItem>
                ))}
            </nav>

            <Input icon={<SearchIcon size={18} />} placeholder="Search for minimalist chair" className='flex-1' />

            <div className='flex items-center gap-4' >
                <IconButton label="Heart">
                    <HeartIcon />
                </IconButton>

                <IconButton label="Cart">
                    <CartIcon />
                </IconButton>

                <IconButton label="Profile">
                    <Avatar src="https://i.pravatar.cc/80" size={40} />
                </IconButton>
            </div>
        </Container>
    </header>
);
