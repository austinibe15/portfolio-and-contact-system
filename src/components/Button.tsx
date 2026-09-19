import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  external = false,
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/85",
    secondary:
      "border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.03]",
    text:
      "px-0 py-0 text-white/60 hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      {showArrow && <ArrowUpRight size={16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}