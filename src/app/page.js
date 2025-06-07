import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-52 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
     <Hero/>
    </div>
  );
}
