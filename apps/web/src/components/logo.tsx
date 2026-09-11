export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="13" width="4" height="8" rx="1" fill="var(--color-down)" />
        <rect x="10" y="8" width="4" height="13" rx="1" fill="var(--ink)" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="var(--color-up)" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight">VOTEVERSE</span>
    </span>
  );
}
