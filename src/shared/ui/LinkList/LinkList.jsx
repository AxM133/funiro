import { cn } from '../../lib';

export const LinkList = ({ title, links, className = '' }) => (
    <div className={cn('flex flex-col gap-6', className)}>
        <h4 className="text-xl font-semibold text-dark">{title}</h4>
        <ul className="flex flex-col gap-4">
            {links.map(({ label, href = '#' }) => (
                <li key={label}>
                    <a href={href} className="text-base text-dark hover:text-primary transition-colors">
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);
