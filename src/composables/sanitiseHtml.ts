export function sanitiseHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}
