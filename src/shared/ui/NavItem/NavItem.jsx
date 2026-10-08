import { cn } from '../../lib';
import { ChevronDownIcon } from '../Icon/icons';

export const NavItem = ({ children, href = '#', hasDropdown = false, className = '', ...props }) => (
    <a
        href={href}
        className={cn('inline-flex items-center gap-1.5 text-sm font-medium text-dark hover:text-primary transition-colors', className)}
        {...props}
    >
        {children}
        {hasDropdown && <ChevronDownIcon size={16} />}
    </a>
);
