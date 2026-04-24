/**
 * Ceremony program data consumed by `Sidebar` (titles) and `EventSection` (full copy + icon).
 *
 * Each event object:
 * - `id` — kebab-case, used as DOM id for scroll targets and observer (must be unique)
 * - `icon` — filename under `src/assets/` (resolved by `resolveEventIcon.js`)
 * - `title`, `fullDescription` — display strings
 * - `iconScale` (optional) — multiplier for per-event icon sizing
 * - `iconCrop` (optional) — crop percentages: `{ top, right, bottom, left }`
 * - `subEvents` (optional) — `{ title, description }[]` for nested steps (e.g. Saptapadi)
 */
export const events = [
  {
    id: 'ganesh-puja',
    icon: 'ganesh-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Ganesh Puja',
    fullDescription:
      "The ceremony begins with Ganapathi Puja, invoking Lord Ganesha, the remover of obstacles (Vighnaharta), to bless the wedding and ensure the celebrations proceed with grace and joy."
  },
  {
    id: 'vara-puja',
    icon: 'groom-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '5%',
      bottom: '10%',
    },
    title: 'Vara Puja',
    fullDescription:
      "The bride's family formally welcomes and honors the groom and his family, symbolizing respect, acceptance, and blessings for the couple's union.",
  },
  {
    id: 'bride-entrance',
    icon: 'bride-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Bride\'s Entrance',
    fullDescription:
      "The bride makes her entrance into the wedding mandap (ceremonial canopy), accompanied by her bridesmaids, maternal uncle, and brothers.",
  },
  {
    id: 'antarapat',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Antarapat/Mangalashtak',
    fullDescription:
      "A white cloth called the Antarpat is held between the bride and groom, preventing them from seeing each other until the auspicious moment arrives. As the cloth is held, eight sacred verses known as Mangalashtak, a cherished Maharashtrian tradition, are chanted to bless the couple with love, prosperity, and harmony.",
  },
  {
    id: 'muhurta',
    icon: 'jeelakara-cropped.svg',
    iconScale: 3,
    iconCrop: {
      top: '10%',
      right: '10%',
      bottom: '20%',
      left: '5%',
    },
    title: 'Sumuhurtham/Jeelakara Bellam',
    fullDescription:
      "Jeelakarra Bellam is a beloved Telugu tradition in which the couple places a paste of cumin and jaggery on each other's heads. This marks the most auspicious moment of the wedding and symbolizes an inseparable bond, embracing both the sweet and bitter moments that life may bring.",
  },
  {
    id: 'garland-exchange',
    icon: 'garland-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '30%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Garland Exchange',
    fullDescription:
      "The bride and groom exchange floral garlands, signifying mutual acceptance, respect, and the joyful beginning of their life together.",
  },
  {
    id: 'kanyadaan',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Kanyadaan',
    fullDescription:
      "The bride's father offers his blessings to the union, entrusting his daughter's happiness and wellbeing to the groom. This deeply emotional ritual marks the bride's transition into a new family.",
  },
  {
    id: 'mangalya-dharanam',
    icon: 'mangalsutra-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Mangalsutra/Mangalya Dharanam',
    fullDescription:
      "In one of the most sacred moments of a Hindu wedding, the groom ties the mangalsutra (a sacred necklace) around the bride's neck, signifying their lifelong union and unwavering commitment to one another.",
  },
  {
    id: 'talambralu',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Talambralu',
    fullDescription:
      "In this joyous Telugu tradition, the bride and groom shower each other with rice mixed with turmeric, symbolizing happiness, prosperity, and blessings for their married life.",
  },
  {
    id: 'laja-home',
    icon: 'havan-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Viviana Pradhana Homam/Laja Home',
    fullDescription:
      "The couple performs a sacred fire ritual, invoking Agni, the god of fire, to witness and sanctify their marriage. Together, they offer puffed rice (lahya) into the flames, often assisted by the bride's brother, symbolizing the enduring bonds of family.",
  },

  {
    id: 'saptapadi',
    icon: 'footsteps-cropped.svg',
    title: 'Saptapadi/Mettelu',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    fullDescription:
      "The couple takes seven steps together around the sacred fire, each step representing a sacred vow. Toe rings, called Mettelu or Jodvi, are placed on the bride's toes to signify her marital status.",
    subEvents: [
      {
        title: 'First Step — Nourishment',
        description:
          'To provide sustenance and care for each other.',
      },
      {
        title: 'Second Step — Strength',
        description:
          'To build physical, emotional, and spiritual strength together.',
      },
      {
        title: 'Third Step — Prosperity',
        description:
          'To earn wealth and prosperity through honest means.',
      },
      {
        title: 'Fourth Step — Happiness',
        description:
          'To seek knowledge, happiness, and harmony in all things.',
      },
      {
        title: 'Fifth Step — Progeny',
        description:
          'To be blessed with strong and virtuous children.',
      },
      {
        title: 'Sixth Step — Longevity',
        description:
          'To enjoy a long life together with patience and self-control.',
      },
      {
        title: 'Seventh Step — Friendship',
        description:
          'To pledge lifelong loyalty and friendship, sealing their bond forever.',
      },
    ],
  },
  {
    id: 'kaan-pilni',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Kaan Pilni',
    fullDescription:
      "In this lighthearted Marathi tradition, the bride's brother playfully twists the groom's ear, a cheeky reminder to always support and take care of his sister.",
  },
  {
    id: 'arundhati-darshan',
    icon: 'arundati-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '0%',
      bottom: '0%',
      left: '0%',
    },
    title: 'Arundhati Darshan',
    fullDescription:
      "The groom points out the double stars Arundhati and Vashishtha in the sky to the bride. In Hindu tradition, these two stars represent the ideal couple, embodying loyalty, devotion, and mutual respect.",
  },
  {
    id: 'vungarala',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Vungarala Sambaram',
    fullDescription:
      "A playful and spirited game from Telugu wedding tradition! This fun competition between the bride and groom symbolizes the teamwork and camaraderie needed to overcome life's obstacles together, a reminder that the journey matters just as much as the destination.",
  },
  {
    id: 'zhaal',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Zhaal',
    fullDescription:
      "As the bride prepares to join the groom's family, her own family stands behind her as a symbol of their unwavering support, entrusting the groom with the couple's happiness and future.",
  },
  {
    id: 'aasheervachanam',
    icon: 'blessings-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Aasheervachanam',
    fullDescription:
      "The newlywed couple seeks blessings from the Vedic priests and elders, receiving their wisdom and good wishes for a blessed life ahead.",
  },
  {
    id: 'vidaai',
    icon: 'kalash-cropped.svg',
    iconScale: 2,
    iconCrop: {
      top: '0%',
      right: '10%',
      bottom: '0%',
      left: '5%',
    },
    title: 'Vidaai',
    fullDescription:
      "The final and most emotional moment of the wedding, the bride bids farewell to her parents and childhood home as she embarks on a beautiful new chapter with her husband.",
  },
]
