export interface Links {
  id: number;
  principal: string;
  subs: string[];
}

export interface LinksProps {
  link: Links[];
}
