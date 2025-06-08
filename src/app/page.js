import Hero from "@/components/Hero";
import Image from "next/image";
import Movies from "./movies/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-52 p-8 pb-20 font-[family-name:var(--font-geist-sans)] gap-20">
     <Hero/>
     <Movies/>
    </div>
  );
}
