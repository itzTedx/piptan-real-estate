import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-20">
      <section className="relative h-dvh">
        <div className="relative z-10"></div>
        <Image src="/images/hero.webp" fill alt="" className="object-cover" />
      </section>
    </main>
  );
}
