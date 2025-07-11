export interface Links {
  id: number;
  principal: string;
  subs: string[];
}

export interface LinksProps {
  link: Links[];
}

export interface CarrosselItem {
  id: number;
  srcImg: string;
  alt: string;
  content: {
    preTitle?: string;
    title: string;
    subtitle?: string;
    coupon?: string;
    buttonText: string;
    buttonLink: string;
    position: "left" | "center" | "right";
  };
}
