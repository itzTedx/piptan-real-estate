import { AnimatedButton } from "@/components/ui/animated-button";

export const FaqSection = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-4">
        <aside className="bg-muted container py-12">
          <h3>FAQ</h3>
          <AnimatedButton text="Send a message" href="/contact" />
        </aside>
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};
