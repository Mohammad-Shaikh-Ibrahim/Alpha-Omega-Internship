export interface SectionProps {
  name: string;
}
export interface CardItem {
  miniCard: React.ReactNode;
  caption: string;
}
export interface CardProps {
  cardTitle?: string;
  cardDescriptionDirection?:string | undefined;
  miniCardDirection?: "row" |"column"
  cardcontentDirection?:string;
  children?: string | React.ReactNode;
  items: CardItem[];
}
export interface CardsProps {
  cardTitle?: string;
  children?: string | React.ReactNode;
}
export interface MiniCardProps {
  miniCardTitle?: string;
  miniCardSubtitle1?: string;
  miniCardSubtitle2?: string;
  miniCardSubtitle3?: string;
  miniCardIcon?: string | React.ReactNode;
  miniCardModeColor?: string;
  miniCardPrice?: string;
}
export interface StyleMode {
  bg?: string;
  text?: string;
  display?:string;
  subtitle?: string;
  iconColor?: string;
  cardIconBg?: string;
}
export interface PayCardProps {
  cardMode?: string;
  cardImg?: string | React.ReactNode;
  cardText?: string;
  cardLine?: string;
  children?: string | React.ReactNode;
}