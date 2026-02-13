import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
    onClick?: () => void;
}

export function Button({
    href,
    children,
    variant = "primary",
    className,
    onClick,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-[0.125rem]";

    const variants = {
        primary:
            "bg-[#ff382e] text-white hover:bg-white hover:text-[#ff382e] active:scale-[0.98]",
        outline:
            "border border-white/20 text-canvas hover:border-[#ff382e] hover:text-[#ff382e] active:scale-[0.98]",
        ghost:
            "text-white/50 hover:text-white active:scale-[0.98]",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
                <span className="material-symbols-outlined text-base leading-none">
                    arrow_right_alt
                </span>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
            <span className="material-symbols-outlined text-base leading-none">
                arrow_right_alt
            </span>
        </button>
    );
}
