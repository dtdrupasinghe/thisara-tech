// Data files mark values that aren't known yet like '[START YEAR]'.
// These helpers keep such placeholders (and empty values) off the live site.

const HAS_TOKEN = /\[[^\]]*\]/;
const TOKENS = /\[[^\]]*\]/g;

/** The value, or undefined when it is empty or still holds a [placeholder]. */
export function filled(value?: string): string | undefined {
  const v = value?.trim();
  return v && !HAS_TOKEN.test(v) ? v : undefined;
}

/** Only the filled values of a list. */
export function filledList(values: string[] = []): string[] {
  return values.map(filled).filter((v): v is string => Boolean(v));
}

/** A date with any [placeholder] parts dropped: '[MONTH] 2026' becomes '2026', '[START]' becomes ''. */
function datePart(value?: string): string {
  return (value ?? '').replace(TOKENS, '').replace(/\s+/g, ' ').trim();
}

/** 'start - end (note)', leaving out whatever is missing. Undefined when nothing is left. */
export function dateRange(start?: string, end?: string, note?: string): string | undefined {
  const range = [datePart(start), datePart(end)].filter(Boolean).join(' - ');
  const extra = filled(note);
  if (range && extra) return `${range} (${extra})`;
  return range || extra;
}
