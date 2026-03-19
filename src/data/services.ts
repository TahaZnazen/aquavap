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
      "Solutions professionnelles pour bureaux, espaces commerciaux et hôtels. Élimine poussière et saletés. Interventions rapides et efficaces.",
    image: "/images/services/card1.png",
  },
  {
    title: "Théâtre & Cinéma",
    description:
      "Nettoyage professionnel des salles de spectacle et cinémas : sièges, moquettes, allées et espaces communs. Élimine poussière et saletés.",
    image: "/images/services/card3.png",
  },
  {
    title: "Mosquée",
    description:
      "Nettoyage approfondi des espaces de prière, tapis et sols. Élimine poussière et saletés. Hygiène irréprochable pour vos lieux de culte.",
    image: "/images/services/card4.png",
  },
  // — Résidentiel —
  {
    title: "Nettoyage Vapeur",
    description:
      "Désinfection en profondeur à la vapeur haute pression. Élimine poussière, saletés et 99,9% des bactéries sans produits chimiques.",
    image: "/images/services/card5.png",
  },
  {
    title: "Canapés & Salons",
    description:
      "Redonner vie à vos canapés, fauteuils et salons. Élimine poussière, saletés, taches, odeurs et allergènes.",
    image: "/images/services/card6.png",
  },
  {
    title: "Tapis & Moquettes",
    description:
      "Nettoyage en profondeur de vos tapis et moquettes. Élimine poussière et saletés. Couleurs ravivées, fibres restaurées.",
    image: "/images/services/card7.png",
  },
  {
    title: "Rideaux & Matelas",
    description:
      "Nettoyage et désinfection de vos rideaux et matelas sur place, sans démontage. Élimine poussière et saletés.",
    image: "/images/services/card8.png",
  },
  // — Voitures last —
  {
    title: "Voitures",
    description:
      "Nettoyage intérieur complet de votre véhicule : sièges, moquettes, tableau de bord et plafond. Élimine poussière et saletés.",
    image: "/images/services/card9.png",
  },
];
