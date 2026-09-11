/**
 * Ambient animated backdrop — soft, colorful, slowly drifting "planet" orbs.
 * Pure CSS transforms (GPU-accelerated, no JS loop), fixed behind everything,
 * pointer-events: none. Headers/cards sit on opaque surfaces above it so
 * legibility is untouched; it only shows through the gutters and hero area.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 */
export function AnimatedBackground() {
  return (
    <div className="rankly-bg" aria-hidden="true">
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
      <span className="orb orb-d" />
      <span className="orb orb-e" />
      <span className="grain" />
    </div>
  );
}
