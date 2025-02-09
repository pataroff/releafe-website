export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'navbarItem': {
      return `/${slug}`
    }
    default:
      return '/'
  }
}
