/** Direct CDN access: no Vercel rewrite/proxy, local files remain the fallback. */
const assetRevisions: Record<string, string> = {
  '/images/characters/bruna-gabriela-v03.webp': '20261111',
  '/images/characters/tiago-vieira-v06.webp': '20261111',
  '/images/modular/mariah-carey-descongelando-v04-estatica.webp': '20261111',
  // These URLs previously returned 404 before upload; bypass cached failures.
  '/images/characters/andressa-soriano-v03.webp': '20261026',
  '/images/modular/lola-julio-v01.webp': '20261026',
};

export function assetUrl(file:string):string {
  const origin=process.env.NEXT_PUBLIC_ASSET_ORIGIN?.replace(/\/$/,'');
  if(!origin||!file.startsWith('/images/')||file.startsWith('/images/map-hd-preview/'))return file;
  const revision=assetRevisions[file];
  return `${origin}${file}${revision?`?rev=${revision}`:''}`;
}
