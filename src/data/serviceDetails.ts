import type { Language } from './site';

type Detail = { intro: string; sections: { title: string; text: string; bullets: string[] }[] };

const coatingFeatures = {
  fr: [
    'Composé de résine élastomère 100 % acrylique à base d’eau et ne contenant aucun bitume.',
    'Polyvalence : permet de modifier la couleur du toit ou de l’uniformiser après des réparations partielles.',
    'Ultra-adhérence : forme une couche de protection contre les éléments et le dur climat canadien.',
    'Protection : prévient la détérioration causée par le gel, la pluie et les rayons UV.',
    'Ne dégage pas de vapeurs désagréables et est respectueux de l’environnement.',
  ],
  en: [
    'Made with 100% acrylic, water-based elastomeric resin and contains no bitumen.',
    'Versatility: changes the roof’s colour or evens it out after partial repairs.',
    'Strong adhesion: forms a protective layer against the elements and Canada’s harsh climate.',
    'Protection: helps prevent deterioration caused by frost, rain and UV rays.',
    'Does not release unpleasant fumes and is environmentally friendly.',
  ],
};

export const serviceDetails: Record<Language, Detail[]> = {
  fr: [
    {
      intro: 'Peinture Toiture Jonathan est en mesure d’effectuer la peinture des murs extérieurs de votre maison. Que ce soit en bois, en métal, en brique ou en vinyle, nous sommes en mesure de le faire. Nous utilisons des produits Sico de haute qualité et adaptés aux revêtements de votre maison pour une finition durable.',
      sections: [],
    },
    {
      intro: 'Lorsqu’il est question de rouille ou de sa prévention sur votre toit de tôle, nous utilisons des produits de qualité professionnelle qui, par leurs propriétés, traiteront et protégeront votre tôle efficacement.',
      sections: [
        {
          title: 'CORROSTOP – PEINTURE ANTIROUILLE DE SICO',
          text: 'Utilisé par les professionnels, cet antirouille possède de nombreux avantages tels que ceux-ci :',
          bullets: ['Polyvalence : antirouille et émail plastique en une seule étape.', 'Résistance : enduit enrichi de polyuréthane et de silicone.', 'Fini plastique ultra-brillant, semi-brillant et mat.', 'Pouvoir cachant supérieur.', 'Adhérence élevée.', 'Offert dans un choix de plus de 1 800 couleurs.'],
        },
        {
          title: 'REVÊTEMENT ÉLASTOMÈRE UNIFLEX',
          text: 'Utilisé lui aussi par la grande majorité des professionnels, ce revêtement élastomère se démarque par les caractéristiques suivantes :',
          bullets: [...coatingFeatures.fr, 'Offert en plusieurs couleurs : aluminium, blanc, rouge ou bleu.'],
        },
      ],
    },
    {
      intro: 'Pour la réfection des toits de bardeaux, nous pouvons compter sur le revêtement élastomère pour bardeaux Uniflex afin de fixer les granules et prolonger ainsi la vie des bardeaux de votre toiture. Ce produit professionnel reconnu assurera un travail d’une qualité inégalée!',
      sections: [{ title: 'REVÊTEMENT ÉLASTOMÈRE UNIFLEX', text: 'Ce revêtement élastomère se démarque par les caractéristiques suivantes :', bullets: [...coatingFeatures.fr, 'Offert en plusieurs couleurs : noir, brun, vert ou gris.'] }],
    },
    {
      intro: 'Le scellant de réparation de toiture permanente Uniflex® One Flash™ est un scellant de qualité supérieure à solin stable, résistant aux UV et flexible en permanence. Il s’agit d’un joint durable et résistant aux intempéries qui offre une excellente adhérence. Uniflex® One Flash™ élimine le besoin de renforcement du tissu, ce qui réduit le nombre d’étapes et le temps de travail.',
      sections: [],
    },
  ],
  en: [
    {
      intro: 'Peinture Toiture Jonathan paints your home’s exterior walls, including wood, metal, brick and vinyl surfaces. We use high-quality Sico products suited to your home’s exterior for a durable finish.',
      sections: [],
    },
    {
      intro: 'To treat rust or help prevent it on your metal roof, we use professional-quality products designed to protect metal effectively.',
      sections: [
        {
          title: 'CORROSTOP – SICO ANTI-RUST PAINT',
          text: 'Used by professionals, this anti-rust paint offers the following benefits:',
          bullets: ['Versatility: anti-rust protection and enamel finish in one step.', 'Durability: a coating enriched with polyurethane and silicone.', 'Available in high-gloss, semi-gloss and matte finishes.', 'Superior coverage.', 'Strong adhesion.', 'Available in more than 1,800 colours.'],
        },
        { title: 'UNIFLEX ELASTOMERIC COATING', text: 'Also widely used by professionals, this elastomeric coating offers the following features:', bullets: [...coatingFeatures.en, 'Available in aluminium, white, red or blue.'] },
      ],
    },
    {
      intro: 'For shingle roof restoration, Uniflex elastomeric shingle coating helps secure the granules and extend the life of your roof’s shingles. This professional product delivers a high-quality finish.',
      sections: [{ title: 'UNIFLEX ELASTOMERIC COATING', text: 'This elastomeric coating offers the following features:', bullets: [...coatingFeatures.en, 'Available in black, brown, green or grey.'] }],
    },
    {
      intro: 'Uniflex® One Flash™ permanent roof repair sealant is a premium, non-sag flashing sealant that resists UV rays and remains flexible. It forms a durable, weather-resistant seal with excellent adhesion. Uniflex® One Flash™ eliminates the need for fabric reinforcement, reducing application steps and working time.',
      sections: [],
    },
  ],
};
