import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-md bg-white/60 border border-white/50 shadow-lg rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}
