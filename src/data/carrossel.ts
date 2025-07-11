import carrossel1 from "../assets/carrossel1.png";
import carrossel2 from "../assets/carrossel2.png";
import carrossel3 from "../assets/carrossel3.png";

export const carrossel = [
  {
    id: 1,
    srcImg: carrossel1,
    alt: "Mulher esfoliando a perna",
    content: {
      preTitle: "confira nossa linha",
      title: "corporal",
      subtitle: "com benefícios além da hidratação",
      buttonText: "comprar agora",
      buttonLink: "/categorias/corporal",
      position: "center",
    },
  },
  {
    id: 2,
    srcImg: carrossel2,
    alt: "Kits de produtos para skin care",
    content: {
      title: "kits incríveis",
      subtitle: "até 50% OFF",
      coupon: "Use o cupom: QUEROTODOS",
      buttonText: "comprar agora",
      buttonLink: "/categorias/kits",
      position: "right",
    },
  },
  {
    id: 3,
    srcImg: carrossel3,
    alt: "Homem aplicando produto anti-age",
    content: {
      preTitle: "toda linha",
      title: "anti-age",
      subtitle: "com 15% OFF",
      coupon: "Use o cupom: ANTIAGE15",
      buttonText: "comprar agora",
      buttonLink: "/categorias/anti-age",
      position: "left",
    },
  },
];
