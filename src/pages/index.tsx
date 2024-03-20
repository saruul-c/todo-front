import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/button";
import ButtonSecond from "@/components/buttonSecond";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button temp={1} />
      <ButtonSecond temp={""} />
    </div>
  );
}
