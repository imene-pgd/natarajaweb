// Agenda Nataraja Event.
// TODO : dates, horaires et lieux d'exemple, à remplacer par les vrais.
export type EventKind = 'Jeudi bien-être' | 'Stage' | 'Self-danse' | 'Bootcamp';

export interface NatarajaEvent {
  date: string; // AAAA-MM-JJ, ou '' si pas encore fixée
  time: string;
  kind: EventKind;
  title: string;
  place: string;
  description: string;
}

export const events: NatarajaEvent[] = [
  {
    date: '2026-10-29',
    time: '19h30 – 21h',
    kind: 'Jeudi bien-être',
    title: 'Danse douce & respiration',
    place: 'Lyon 7e',
    description: 'Le dernier jeudi du mois, on relâche la semaine en douceur.',
  },
  {
    date: '2026-11-14',
    time: '14h – 17h',
    kind: 'Stage',
    title: 'Chorée Bollywood débutant',
    place: 'Lyon 3e',
    description: 'Trois heures pour apprendre une chorégraphie complète.',
  },
  {
    date: '2026-11-26',
    time: '19h30 – 21h',
    kind: 'Jeudi bien-être',
    title: 'Yoga dansé',
    place: 'Lyon 7e',
    description: 'Étirements, mudras et mouvement libre.',
  },
  {
    date: '2026-12-05',
    time: '14h – 17h',
    kind: 'Stage',
    title: 'Afro-Bollywood',
    place: 'Lyon 3e',
    description: 'Quand les rythmes afro rencontrent les thumkas.',
  },
];

export const recurring = [
  { kind: 'Self-danse' as EventKind, when: 'Chaque mardi · 20h', title: 'Self-danse', description: 'Se reconnecter à son corps, sans miroir ni jugement.' },
];

export const upcoming = { kind: 'Bootcamp' as EventKind, title: 'Bootcamps Nataraja', description: 'Un week-end intensif est en préparation.' };

export function formatDate(iso: string) {
  const d = new Date(iso + 'T12:00:00');
  return {
    day: d.toLocaleDateString('fr-FR', { day: '2-digit' }),
    month: d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', ''),
    weekday: d.toLocaleDateString('fr-FR', { weekday: 'long' }),
  };
}
