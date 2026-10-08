import { cn } from '../../lib';

export const FeatureItem = ({ icon, title, description, className = '' }) => (
    <div className={cn('flex items-center gap-5', className)}>
        <span className="shrink-0 text-dark">{icon}</span>
        <div className="flex flex-col gap-1">
            <h3 className="text-base font-medium text-dark">{title}</h3>
            <p className="text-sm text-gray">{description}</p>
        </div>
    </div>
);
