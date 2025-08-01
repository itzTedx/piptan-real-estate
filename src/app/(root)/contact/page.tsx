import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/features/forms/contact-form/form";
import { FaqSection } from "@/features/home/section/faq";

export default function ContactPage() {
  return (
    <main className="py-4 sm:py-9 md:py-12">
      <section className="relative container pb-20">
        <SectionHeader
          title={`Let's Start\na Conversation`}
          subtitle=" Have questions about our properties or services? We're here to
          help. Fill out the form below and our team will get back to you
          shortly."
          hasHighlight
          highlightText="Conversation"
          as="h1"
        />
        <div className="mt-12 grid grid-cols-3 gap-6">
          <ContactForm />
          <aside>
            <h2 className="font-jaguar text-3xl">Other Ways to Reach Us</h2>
            <div className="mt-4 grid grid-cols-1 gap-6">
              {[
                {
                  title: "Office Location",
                  content: "Dubai, United Arab Emirates",
                },
                {
                  title: "Email",
                  content: "info@piptan.com",
                },
                {
                  title: "Phone",
                  content: "+971 4 123 4567",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="group hover:border-primary/50 rounded-lg border p-6 transition-colors duration-300"
                >
                  <h3 className="mb-2 text-xl font-medium">{info.title}</h3>
                  <p className="text-primary-foreground">{info.content}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <FaqSection />
    </main>
  );
}
