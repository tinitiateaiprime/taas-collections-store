export type Role = {
  id: string;
  title: string;
  slug: string;
  image: string;
};

export const roles: Role[] = [
  {
    id: "1",
    title: "Bride",
    slug: "bride",
    image: "/assets/images/brideimage.png",
  },
  {
    id: "2",
    title: "Bride’s Mom",
    slug: "mother",
    image: "/assets/images/bride'smom.png",
  },
  {
    id: "3",
    title: "Bridesmaids",
    slug: "bridesmaids",
    image: "/assets/images/bridesmaids.png",
  },
  {
    id: "4",
    title: "Groom",
    slug: "groom",
    image: "/assets/images/groom.png",
  },
];