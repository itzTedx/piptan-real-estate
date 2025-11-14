import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Piptan Capital L.L.C - Real Estate Investment Services in Dubai, UAE",
};

export default function TermsOfServicePage() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "2024";

  return (
    <main className="container py-8 sm:py-12 md:py-16 lg:py-20">
      <article className="mx-auto max-w-prose">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <Separator className="mb-8" />

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-foreground/90 mb-4 text-base leading-relaxed sm:text-lg">
            Welcome to Piptan Investment. These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of our website,
            services, and real estate investment platform operated by Piptan
            Capital L.L.C (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By accessing or using our services, you agree to be bound by these
            Terms.
          </p>
          <p className="text-foreground/90 mb-4 text-base leading-relaxed sm:text-lg">
            Please read these Terms carefully before using our services. If you
            do not agree to these Terms, you must not access or use our
            services.
          </p>
        </section>

        {/* Company Information */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            1. Company Information
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              <strong>Company Name:</strong> Piptan Capital L.L.C
            </p>
            <p>
              <strong>Registration Number:</strong> 2699641
            </p>
            <p>
              <strong>License Number:</strong> 1551118
            </p>
            <p>
              <strong>Jurisdiction:</strong> United Arab Emirates
            </p>
            <p>
              Piptan Capital L.L.C operates in accordance with the laws and
              regulations of the United Arab Emirates. We uphold the highest
              ethical and regulatory standards in all our activities, ensuring
              that our practices reflect both local and international best
              practices.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Services */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            2. Our Services
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Piptan Investment provides premium real estate services including,
              but not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Real estate investment consultation and advisory services</li>
              <li>Property listings and marketing services</li>
              <li>Luxury residential and commercial property sales</li>
              <li>Property development and investment opportunities</li>
              <li>Real estate market analysis and insights</li>
              <li>Property management and related services</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our services at any time without prior notice.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* User Obligations */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            3. User Obligations
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>By using our services, you agree to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Provide accurate, current, and complete information when
                requested
              </li>
              <li>
                Maintain the security of your account credentials and notify us
                immediately of any unauthorized access
              </li>
              <li>
                Use our services only for lawful purposes and in accordance with
                these Terms
              </li>
              <li>
                Not engage in any activity that may interfere with or disrupt
                our services
              </li>
              <li>
                Not use our services to transmit any harmful, offensive, or
                illegal content
              </li>
              <li>
                Comply with all applicable laws and regulations in the United
                Arab Emirates
              </li>
              <li>
                Respect intellectual property rights and not infringe upon the
                rights of others
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Property Information */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            4. Property Information and Listings
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              While we strive to provide accurate and up-to-date information
              about properties listed on our platform:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Property information, including prices, specifications, and
                availability, is subject to change without notice
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or reliability
                of any property information
              </li>
              <li>
                Property images and descriptions are for illustrative purposes
                only and may not reflect the exact condition or features
              </li>
              <li>
                All property transactions are subject to separate agreements and
                terms negotiated between parties
              </li>
              <li>
                We recommend conducting independent due diligence and property
                inspections before making any purchase decisions
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Financial Terms */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            5. Financial Terms and Payments
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>Financial terms for our services and property transactions:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                All prices and fees are quoted in UAE Dirhams (AED) unless
                otherwise stated
              </li>
              <li>
                Commission rates and service fees will be disclosed and agreed
                upon before the commencement of services
              </li>
              <li>
                Payment terms and schedules will be specified in individual
                service agreements
              </li>
              <li>
                We reserve the right to request deposits or advance payments as
                specified in service agreements
              </li>
              <li>
                Refund policies, if applicable, will be clearly stated in the
                relevant service agreement
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            6. Intellectual Property Rights
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              All content on our website and platform, including but not limited
              to text, graphics, logos, images, software, and other materials,
              is the property of Piptan Capital L.L.C or its licensors and is
              protected by copyright, trademark, and other intellectual property
              laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, or otherwise use our content without our
              prior written consent.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            7. Limitation of Liability
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Piptan Capital L.L.C shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
              </li>
              <li>
                Our total liability for any claims arising from or related to
                our services shall not exceed the amount you paid to us in the
                twelve (12) months preceding the claim
              </li>
              <li>
                We do not guarantee that our services will be uninterrupted,
                secure, or error-free
              </li>
              <li>
                We are not responsible for any losses or damages resulting from
                your reliance on information provided through our services
              </li>
              <li>
                Property investments carry inherent risks, and we do not
                guarantee investment returns or property values
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Privacy and Data Protection */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            8. Privacy and Data Protection
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Your privacy is important to us. Our collection, use, and
              protection of your personal information is governed by our{" "}
              <Link
                href="/legal/privacy"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
            <p>
              By using our services, you consent to the collection and use of
              your information as described in our Privacy Policy, in accordance
              with applicable data protection laws in the United Arab Emirates.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Termination */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            9. Termination
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We reserve the right to suspend or terminate your access to our
              services at any time, with or without cause or notice, for any
              reason including, but not limited to, breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will immediately
              cease. All provisions of these Terms that by their nature should
              survive termination shall survive, including ownership provisions,
              warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            10. Governing Law and Dispute Resolution
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United Arab Emirates, without regard to its
              conflict of law provisions.
            </p>
            <p>
              Any disputes arising from or relating to these Terms or our
              services shall be subject to the exclusive jurisdiction of the
              courts of Dubai, United Arab Emirates.
            </p>
            <p>
              We encourage you to contact us first to resolve any disputes
              amicably before pursuing legal action.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            11. Changes to Terms
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the updated Terms
              on our website and updating the &quot;Last Updated&quot; date.
            </p>
            <p>
              Your continued use of our services after such modifications
              constitutes your acceptance of the updated Terms. If you do not
              agree to the modified Terms, you must discontinue using our
              services.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            12. Contact Information
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-muted mt-4 rounded-lg border p-6">
              <p className="mb-2 font-semibold">Piptan Capital L.L.C</p>
              <p>Registration No.: 2699641</p>
              <p>License No.: 1551118</p>
              <p className="mt-4">
                For inquiries, please visit our{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline underline-offset-2"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* License Information with QR Code */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            13. License Information
          </h2>
          <div className="text-foreground/90 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>
              Piptan Capital L.L.C is a licensed real estate company operating
              in the United Arab Emirates. Our license information is verified
              and can be accessed through the QR code below:
            </p>
            <div className="bg-muted flex flex-col items-start gap-6 rounded-lg border p-6 sm:flex-row sm:items-center">
              <div className="flex-1">
                <p className="mb-2 font-semibold">License Verification</p>
                <p className="mb-2">
                  <strong>Registration Number:</strong> 2699641
                </p>
                <p className="mb-2">
                  <strong>License Number:</strong> 1551118
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  Scan the QR code to verify our license information with the
                  relevant regulatory authorities in the United Arab Emirates.
                </p>
              </div>
              <div className="shrink-0 rounded-md border bg-white p-2">
                <Image
                  src="/images/licence-qrcode.jpg"
                  alt="License QR Code - Piptan Capital L.L.C License Verification"
                  width={120}
                  height={120}
                  className="rounded"
                />
              </div>
            </div>
            <p className="mt-4">
              Piptan Capital L.L.C operates in accordance with the laws and
              regulations of the United Arab Emirates. We uphold the highest
              ethical and regulatory standards in all our activities, ensuring
              that our practices reflect both local and international best
              practices.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Acknowledgment */}
        <section className="mb-8">
          <div className="bg-muted rounded-lg border p-6">
            <p className="text-foreground/90 text-base leading-relaxed sm:text-lg">
              <strong>
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </strong>
            </p>
            <p className="text-foreground/90 mt-4 text-base leading-relaxed sm:text-lg">
              If you do not agree to these Terms, please do not use our
              services.
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="mt-12 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            © {currentYear} Piptan Capital L.L.C. All rights reserved.
          </p>
        </footer>
      </article>
    </main>
  );
}
