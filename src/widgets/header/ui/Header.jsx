import { Logo, Container, NavItem, Dropdown, Input, SearchIcon, IconButton, HeartIcon, CartIcon, Avatar } from '../../../shared/ui';
import { navItems } from '../config/navItems';

export const Header = () => (
    <header className="sticky top-0 z-50 bg-white py-6">
        <Container className='flex items-center gap-10'>
            <Logo />

            <nav className='hidden md:flex items-center gap-8'>
                {navItems.map(({ label, href, hasDropdown, items }) => (
                    hasDropdown
                        ? <Dropdown key={label} label={label} href={href} items={items} />
                        : <NavItem key={label} href={href}>{label}</NavItem>
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
