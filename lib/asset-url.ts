/** Direct CDN access: no Vercel rewrite/proxy, local files remain the fallback. */
const assetRevisions: Record<string, string> = {
  '/images/characters/rodolfo-monegatto-v01.webp': '20261114',
  '/images/characters/mario-lucio-v01.webp': '20261114',
  '/images/characters/laila-lafloufa-v02.webp': '20261114',
  '/images/characters/sophia-spadao-v02.webp': '20261114',
  '/images/characters/victoria-hang-v02.webp': '20261114',
  '/images/menu-portraits/rodolfo-monegatto.webp': '20261114',
  '/images/menu-portraits/mario-lucio.webp': '20261114',
  '/images/menu-portraits/laila-lafloufa.webp': '20261114',
  '/images/menu-portraits/sophia-spadao.webp': '20261114',
  '/images/menu-portraits/victoria-hang.webp': '20261114',
  '/images/modular/praca-central-natal-montagem-v01.webp': '20261114',
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
