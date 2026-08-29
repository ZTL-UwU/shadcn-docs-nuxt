export type CollectionLocale = string & { readonly __brand: 'CollectionLocale' };

export type DocsCollectionName = 'docs' | `docs_${CollectionLocale}`;
export type LandingCollectionName = 'landing' | `landing_${CollectionLocale}`;
export type CollectionName = DocsCollectionName | LandingCollectionName;

export function toCollectionLocale(code: string): CollectionLocale {
  if (code === '') {
    throw new Error('toCollectionLocale: empty locale code is illegal');
  }
  return code.replaceAll('-', '_') as CollectionLocale;
}

export function docsCollectionName(locale: CollectionLocale | undefined): DocsCollectionName {
  return locale ? `docs_${locale}` : 'docs';
}

export function landingCollectionName(locale: CollectionLocale | undefined): LandingCollectionName {
  return locale ? `landing_${locale}` : 'landing';
}
