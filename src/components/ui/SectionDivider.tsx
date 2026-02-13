import { cn } from "@/lib/utils";

interface SectionDividerProps {
    className?: string;
    label?: string;
}

export function SectionDivider({ className, label }: SectionDividerProps) {
    return (
        <div className={cn("relative w-full py-1", className)}>
            <div className="h-px bg-white/10 w-full" />
            {label && (
                <span className="absolute right-0 -top-2 text-[0.625rem] uppercase tracking-[0.2em] text-white/30">
                    {label}
                </span>
            )}
        </div>
    );
}

interface SystemStatusProps {
    label: string;
    className?: string;
}

export function SystemStatus({ label, className }: SystemStatusProps) {
    return (
        <span
            className={cn(
                "inline-block text-[0.625rem] uppercase tracking-[0.15em] text-white/40 font-display leading-none",
                className
            )}
        >
            <span className="text-[#ff382e]">// </span>
            {label}
        </span>
    );
}
