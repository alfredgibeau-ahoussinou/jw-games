export function OrnamentalDivider({ label }: { label?: string }) {
  return (
    <div className="ornament-divider my-8" aria-hidden={!label}>
      {label ? <span>{label}</span> : <span>✦</span>}
    </div>
  );
}
