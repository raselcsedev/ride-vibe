import {
  MountainIcon,
  RouteIcon,
  BoltIcon,
  BikeIcon,
  LayersIcon,
  HardDriveIcon,
  CircleDotIcon,
} from "lucide-react";

export interface CategoryProps {
  id: string;
  icon: any;
  title: string;
  text: string;
}

export const categoryItem: CategoryProps[] = [
  {
    id: "mountain",
    icon: MountainIcon,
    title: "Mountain",
    text: "For off-road adventures and trail riding",
  },
  {
    id: "road",
    icon: RouteIcon,
    title: "Road",
    text: "Built for speed and performance on paved surfaces",
  },
  {
    id: "hybrid",
    icon: BikeIcon,
    title: "Hybrid",
    text: "Versatile bikes for both city and light trails",
  },
  {
    id: "bmx",
    icon: BikeIcon,
    title: "BMX",
    text: "Designed for tricks, stunts and racing",
  },
  {
    id: "electric",
    icon: BoltIcon,
    title: "Electric",
    text: "Power-assisted riding for effortless commuting",
  },
  {
    id: "aluminum",
    icon: HardDriveIcon,
    title: "Aluminum",
    text: "Lightweight and corrosion-resistant",
  },
  {
    id: "carbon",
    icon: CircleDotIcon,
    title: "Carbon",
    text: "Ultra-lightweight with superior vibration dampening",
  },
  {
    id: "steel",
    icon: LayersIcon,
    title: "Steel",
    text: "Durable with excellent ride quality",
  },
];

export const categoryItemType = categoryItem.map((item) => item.id);
export type categoryProps = (typeof categoryItemType)[number];
