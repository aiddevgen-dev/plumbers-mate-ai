export default function BlogPostLoading() {
  return (
    <section className="py-10 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto animate-pulse">
        {/* Back link */}
        <div className="h-4 w-28 bg-white/10 rounded mb-8" />

        {/* Date */}
        <div className="h-3 w-32 bg-white/10 rounded mb-4" />

        {/* Title */}
        <div className="h-8 w-3/4 bg-white/10 rounded mb-3" />
        <div className="h-8 w-1/2 bg-white/10 rounded mb-8" />

        {/* TLDR box */}
        <div className="rounded-xl bg-dark-card border border-dark-border p-5 mb-8">
          <div className="h-4 w-12 bg-white/10 rounded mb-3" />
          <div className="h-3 w-full bg-white/10 rounded mb-2" />
          <div className="h-3 w-2/3 bg-white/10 rounded" />
        </div>

        {/* Hero image */}
        <div className="h-56 sm:h-72 w-full bg-white/5 rounded-2xl mb-8" />

        {/* Content lines */}
        <div className="space-y-3 mb-12">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-white/10 rounded"
              style={{ width: `${85 - i * 5}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
