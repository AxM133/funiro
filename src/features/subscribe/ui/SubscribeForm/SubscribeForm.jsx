import { cn } from '../../../../shared/lib';
import { Input, SendIcon } from '../../../../shared/ui';

export const SubscribeForm = ({ onSubmit, className = '' }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = new FormData(event.currentTarget).get('email');
        onSubmit?.(email);
    };

    return (
        <form onSubmit={handleSubmit} className={cn('flex', className)}>
            <Input
                type="email"
                name="email"
                required
                variant="soft"
                placeholder="Enter your email"
                aria-label="Email"
                className="flex-1"
            />
            <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center size-11 shrink-0 bg-primary text-white hover:bg-primary-dark transition-colors cursor-pointer"
            >
                <SendIcon size={18} />
            </button>
        </form>
    );
};
