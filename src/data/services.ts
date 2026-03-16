export interface Service {
  title: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  // — B2B first —
  {
    title: "Entreprise & Bureaux",
    description:
      "Solutions professionnelles pour bureaux, espaces commerciaux et hôtels. Interventions rapides et efficaces.",
    image: "/images/services/card1.png",
  },
  {
    title: "Cuisine & Dégraissage",
    description:
      "Nettoyage et dégraissage complet de cuisines professionnelles et domestiques. Hottes, plans de travail, équipements.",
    image: "/images/services/card2.png",
  },
  {
    title: "Théâtre & Cinéma",
    description:
      "Nettoyage professionnel des salles de spectacle et cinémas : sièges, moquettes, allées et espaces communs.",
    image: "/images/services/card3.png",
  },
  {
    title: "Mosquée",
    description:
      "Nettoyage approfondi des espaces de prière, tapis et sols. Hygiène irréprochable pour vos lieux de culte.",
    image: "/images/services/card4.png",
  },
  // — Résidentiel —
  {
    title: "Nettoyage Vapeur",
    description:
      "Désinfection en profondeur à la vapeur haute pression. Élimine 99,9% des bactéries sans produits chimiques.",
    image: "/images/services/card5.png",
  },
  {
    title: "Canapés & Salons",
    description:
      "Redonner vie à vos canapés, fauteuils et salons. Élimination des taches, odeurs et allergènes.",
    image: "/images/services/card6.png",
  },
  {
    title: "Tapis & Moquettes",
    description:
      "Nettoyage en profondeur de vos tapis et moquettes. Couleurs ravivées, fibres restaurées.",
    image: "/images/services/card7.png",
  },
  {
    title: "Rideaux & Matelas",
    description:
      "Nettoyage et désinfection de vos rideaux et matelas sur place, sans démontage.",
    image: "/images/services/card8.png",
  },
  // — Voitures last —
  {
    title: "Voitures",
    description:
      "Nettoyage intérieur complet de votre véhicule : sièges, moquettes, tableau de bord et plafond.",
    image: "/images/services/card9.png",
  },
];
