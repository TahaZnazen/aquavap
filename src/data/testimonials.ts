export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sana B.",
    text: "Mon canapé est comme neuf ! L'équipe est professionnelle et ponctuelle. Je recommande vivement Aquavap.",
    rating: 5,
    service: "Canapés & Salons",
  },
  {
    name: "Mohamed K.",
    text: "Service excellent pour ma voiture. L'intérieur n'a jamais été aussi propre. Rapport qualité-prix imbattable.",
    rating: 5,
    service: "Voitures",
  },
  {
    name: "Amira H.",
    text: "Ils ont nettoyé tous les tapis de notre hôtel en une journée. Résultat impeccable, nos clients sont ravis.",
    rating: 5,
    service: "Hôtels & Espaces Pro",
  },
  {
    name: "Yassine M.",
    text: "Matelas et rideaux nettoyés sur place, sans rien démonter. Très pratique et résultat impressionnant.",
    rating: 4,
    service: "Rideaux & Matelas",
  },
];
