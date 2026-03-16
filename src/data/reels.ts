export interface Reel {
  url: string;
  platform: "instagram" | "tiktok";
  title: string;
}

// Replace these with actual reel URLs from your social media accounts
export const reels: Reel[] = [
  {
    url: "https://www.instagram.com/reel/EXAMPLE1/",
    platform: "instagram",
    title: "Nettoyage canapé — Avant/Après",
  },
  {
    url: "https://www.instagram.com/reel/EXAMPLE2/",
    platform: "instagram",
    title: "Nettoyage voiture intérieur",
  },
  {
    url: "https://www.instagram.com/reel/EXAMPLE3/",
    platform: "instagram",
    title: "Tapis — Transformation complète",
  },
];
