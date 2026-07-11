export function OrnamentalDivider({ label }: { label?: string }) {
  return label ? <hr aria-label={label} /> : <hr />;
}
