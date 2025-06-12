import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-16">
      <section className="relative h-dvh">
        <Image src="/images/hero.webp" fill alt="" className="object-cover" />
      </section>
    </main>
  );
}
