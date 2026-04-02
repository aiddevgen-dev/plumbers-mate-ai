/** Strip all HTML tags and return plain text */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

/** Format ISO date (2025-11-03) → "Nov 03, 2025". Leaves already-formatted dates unchanged. */
export function formatDate(date: string): string {
  if (!date) return "";
  // Already formatted like "Mar 30, 2026" — return as-is
  if (/[a-zA-Z]/.test(date)) return date;
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return date;
  }
}
