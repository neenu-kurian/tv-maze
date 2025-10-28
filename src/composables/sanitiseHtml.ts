export function sanitiseHtml(html: string): string {
  function sanitiseHtml(html: string): string {
    return html?.replace(/<[^>]*>/g, '');
  }
  return sanitiseHtml(html);
}
