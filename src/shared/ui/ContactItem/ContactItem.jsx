import { cn } from '../../lib';

export const ContactItem = ({ icon, children, href, className = '' }) => {
    const Tag = href ? 'a' : 'span';

    return (
        <Tag href={href} className={cn('flex items-center gap-3 text-sm text-dark', href && 'hover:text-primary', className)}>
            {icon && <span className="shrink-0 text-primary">{icon}</span>}
            {children}
        </Tag>
    );
};
