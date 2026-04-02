import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/sheets";
import { formatDate } from "@/lib/utils";

function isValidUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

export function BlogCard({ post }: { post: BlogPost }) {
  const validImage  = post.image && isValidUrl(post.image) ? post.image : null;
  const displayDate = formatDate(post.date);

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-1 bg-dark-card border border-dark-border"
      >
        {/* Date + Title */}
        <div className="p-5 flex-1">
          <p className="text-xs font-medium mb-3 text-dark-muted">
            {displayDate}
          </p>
          <h2 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-yellow-400 transition-colors">
            {post.title}
          </h2>
        </div>

        {/* Image */}
        {validImage && (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden">
            <Image
              src={validImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </article>
    </Link>
  );
}
