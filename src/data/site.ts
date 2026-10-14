// Préfixe les liens internes avec le chemin de base du site
// (utile sur GitHub Pages, où le site vit sous /natarajaweb/).
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

// Coordonnées affichées partout sur le site.
// TODO : remplacer par les vraies informations de Nataraja.
export const contact = {
  phone: '06 00 00 00 00',
  phoneHref: '+33600000000',
  email: 'contact@nataraja.fr',
  instagram: 'nataraja.danse',
  zone: 'Lyon & région Auvergne-Rhône-Alpes',
};

export const nav = [
  { href: url('/shows'), label: 'Shows' },
  { href: url('/event'), label: 'Nataraja Event' },
  { href: url('/communaute'), label: 'Communauté' },
];

export const partners = ['ASP', 'IHOPe Lyon'];
