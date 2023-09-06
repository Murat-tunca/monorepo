export default function TvLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-label="TvLayout"
      role="contentinfo"
      className="bg-background container mx-auto max-w-5xl py-10"
    >
      {children}
    </section>
  );
}
