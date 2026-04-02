export default function BlogLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/blog-hero.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,20,40,0.72) 0%, rgba(13,22,40,0.85) 100%)",
          }}
        />
        <div className="relative z-10">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-primary/20">
              <span>📰</span> Blog Posts
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
            <span className="gradient-text">Latest News</span>{" "}
            <em className="heading-italic font-light gradient-text">Articles</em>
          </h1>
          <p className="text-sm sm:text-base max-w-md mx-auto text-dark-muted">
            Stay up to date with the latest improvements and new features
          </p>
        </div>
      </section>

      {/* Skeleton cards */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-dark-card border border-dark-border animate-pulse"
              >
                <div className="p-5">
                  <div className="h-3 w-24 bg-white/10 rounded mb-4" />
                  <div className="h-5 w-3/4 bg-white/10 rounded mb-2" />
                  <div className="h-5 w-1/2 bg-white/10 rounded" />
                </div>
                <div className="h-48 sm:h-52 bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
