import { cn } from '../../lib';

export const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
        {subtitle && <p className="mb-2 text-lg font-semibold text-gray">{subtitle}</p>}
        <h2 className="text-4xl font-bold text-dark">{title}</h2>
    </div>
);
