/**
 * Ceremony program data consumed by `Sidebar` (titles) and `EventSection` (full copy + icon).
 *
 * Each event object:
 * - `id` — kebab-case, used as DOM id for scroll targets and observer (must be unique)
 * - `icon` — filename under `src/assets/` (resolved by `resolveEventIcon.js`)
 * - `title`, `shortDescription`, `fullDescription` — display strings
 * - `subEvents` (optional) — `{ title, description }[]` for nested steps (e.g. Saptapadi)
 */
export const events = [
  {
    id: 'vara-puja',
    icon: 'react.svg',
    title: 'Seeman/Vara Puja',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'ganesh-puja',
    icon: 'vite.svg',
    title: 'Ganesh Puja',
    shortDescription: 'Invocation of Lord Ganesha for an auspicious beginning.',
    fullDescription:
      'The ceremony opens with prayers to Lord Ganesha, the remover of obstacles. The priest guides the families in offering flowers, incense, and modak while chanting mantras, seeking blessings for a harmonious and joyful union.',
  },
  {
    id: 'bride-entrance',
    icon: 'react.svg',
    title: 'Bride\'s Entrance',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'antarapat',
    icon: 'vite.svg',
    title: 'Antarapat/Mangalashtak',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'muhurta',
    icon: 'react.svg',
    title: 'Sumuhurtham/Muhurtham/Jeelakara Bellam',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'garland-exchange',
    icon: 'vite.svg',
    title: 'Garland Exchange',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'kanyadaan',
    icon: 'react.svg',
    title: 'Kanyadaan/Kanyadanam',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'mangalya-dharanam',
    icon: 'vite.svg',
    title: 'Mangalya Dharanam',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'talambralu',
    icon: 'react.svg',
    title: 'Talambralu',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'laja-home',
    icon: 'vite.svg',
    title: 'Viviana Pradhana Homam/Laja Home',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },

  {
    id: 'saptapadi',
    icon: 'react.svg',
    title: 'Saptapadi',
    shortDescription: 'The seven sacred steps around the holy fire.',
    fullDescription:
      'The couple takes seven steps together around the agni kund, each step representing a vow for their life ahead—nourishment, strength, prosperity, happiness, progeny, longevity, and friendship. These vows form the heart of the Hindu marriage rite.',
    subEvents: [
      {
        title: 'First step — nourishment',
        description:
          'The first step is for nourishment: sharing food and sustaining each other in body and spirit.',
      },
      {
        title: 'Second step — strength',
        description:
          'The second step is for strength: supporting one another through life’s challenges.',
      },
      {
        title: 'Third step — prosperity',
        description:
          'The third step is for prosperity: working together for a secure and abundant household.',
      },
      {
        title: 'Fourth step — happiness',
        description:
          'The fourth step is for happiness: cultivating joy, laughter, and peace in the home.',
      },
      {
        title: 'Fifth step — progeny',
        description:
          'The fifth step is for noble progeny: raising children with virtue and love.',
      },
      {
        title: 'Sixth step — longevity',
        description:
          'The sixth step is for long life: wishing health and many years together.',
      },
      {
        title: 'Seventh step — friendship',
        description:
          'The seventh step is for friendship and fidelity: remaining true companions for life.',
      },
    ],
  },
  {
    id: 'jodvi',
    icon: 'vite.svg',
    title: 'Mettelu/Jodvi',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'kaan-pilni',
    icon: 'react.svg',
    title: 'Kaan Pilni',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'arundhati-darshan',
    icon: 'vite.svg',
    title: 'Arundhati Darshan',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'zaal',
    icon: 'react.svg',
    title: 'Zaal/Airani Daan',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'aasheervachanam',
    icon: 'vite.svg',
    title: 'Aasheervachanam',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
  {
    id: 'vidaai',
    icon: 'react.svg',
    title: 'Vidaai',
    shortDescription: 'Insert description here',
    fullDescription:
      'Insert description here',
  },
]
