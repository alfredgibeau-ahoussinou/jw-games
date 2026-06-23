import type { Metadata } from "next";
import { GamesHub } from "./GamesHub";

export const metadata: Metadata = {
  title: "Jeux",
};

export default function JeuxPage() {
  return <GamesHub />;
}
