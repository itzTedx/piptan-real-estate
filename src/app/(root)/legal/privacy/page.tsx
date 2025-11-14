import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Piptan Capital L.L.C - Real Estate Investment Services in Dubai, UAE",
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "2024";

  return (
    <main className="container py-8 sm:py-12 md:py-16 lg:py-20">
      <article className="mx-auto max-w-prose">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <Separator className="mb-8" />

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-foreground/90 mb-4 text-base leading-relaxed sm:text-lg">
            At Piptan Capital L.L.C (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;), we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website, use our services, or
            interact with us.
          </p>
          <p className="text-foreground/90 mb-4 text-base leading-relaxed sm:text-lg">
            Please read this Privacy Policy carefully. By accessing or using our
            services, you acknowledge that you have read, understood, and agree
            to be bound by this Privacy Policy. If you do not agree with our
            policies and practices, please do not use our services.
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
              This Privacy Policy is governed by the laws and regulations of the
              United Arab Emirates, including but not limited to the UAE Federal
              Law No. 45 of 2021 on the Protection of Personal Data.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            2. Information We Collect
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We collect information that you provide directly to us and
              information that is automatically collected when you use our
              services:
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              2.1. Information You Provide
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, postal address, date of birth,
                nationality, and government-issued identification numbers
              </li>
              <li>
                <strong>Financial Information:</strong> Bank account details,
                payment information, credit card details, and financial history
                (processed securely through third-party payment processors)
              </li>
              <li>
                <strong>Property Preferences:</strong> Property type
                preferences, budget range, location preferences, and investment
                goals
              </li>
              <li>
                <strong>Communication Data:</strong> Correspondence, inquiries,
                feedback, and any other information you provide when contacting
                us
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and
                account preferences if you create an account with us
              </li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">
              2.2. Automatically Collected Information
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system, device identifiers, and mobile network
                information
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages,
                click patterns, search queries, and navigation paths
              </li>
              <li>
                <strong>Location Data:</strong> General location information
                derived from your IP address or device settings (with your
                consent)
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> Information
                collected through cookies, web beacons, and similar technologies
                (see Section 7 for more details)
              </li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">
              2.3. Information from Third Parties
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Information from real estate partners, property developers, and
                service providers
              </li>
              <li>Public records and property databases</li>
              <li>Social media platforms (if you connect your accounts)</li>
              <li>
                Credit bureaus and financial institutions (with your consent)
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            3. How We Use Your Information
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service Delivery:</strong> To provide, maintain, and
                improve our real estate services, process transactions, and
                facilitate property viewings and consultations
              </li>
              <li>
                <strong>Communication:</strong> To respond to your inquiries,
                provide customer support, send service-related notifications,
                and communicate about properties and opportunities
              </li>
              <li>
                <strong>Personalization:</strong> To personalize your
                experience, recommend properties that match your preferences,
                and customize content and advertisements
              </li>
              <li>
                <strong>Marketing:</strong> To send you marketing
                communications, newsletters, property updates, and promotional
                materials (with your consent, which you can withdraw at any
                time)
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable
                laws, regulations, legal processes, and government requests,
                including anti-money laundering (AML) and know-your-customer
                (KYC) requirements
              </li>
              <li>
                <strong>Security:</strong> To detect, prevent, and address
                fraud, security breaches, and other potentially illegal or
                harmful activities
              </li>
              <li>
                <strong>Analytics:</strong> To analyze usage patterns, improve
                our website and services, conduct research, and generate
                insights
              </li>
              <li>
                <strong>Business Operations:</strong> To manage our business
                operations, maintain records, and facilitate business
                transactions
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Information Sharing and Disclosure */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            4. Information Sharing and Disclosure
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service Providers:</strong> With third-party service
                providers who perform services on our behalf, such as payment
                processing, data storage, website hosting, analytics, marketing,
                and customer support (these providers are contractually
                obligated to protect your information)
              </li>
              <li>
                <strong>Business Partners:</strong> With real estate developers,
                property owners, financial institutions, and other business
                partners necessary to provide our services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or government regulation, or to respond to legal process,
                protect our rights, or prevent harm
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, reorganization, or sale of assets, where
                your information may be transferred as part of the transaction
              </li>
              <li>
                <strong>With Your Consent:</strong> When you have explicitly
                consented to the sharing of your information
              </li>
              <li>
                <strong>Public Information:</strong> Information you choose to
                make public through our platform may be visible to others
              </li>
            </ul>
            <p className="mt-4">
              We take reasonable steps to ensure that third parties with whom we
              share your information maintain appropriate security measures and
              use your information only for the purposes for which it was
              shared.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            5. Data Security
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Encryption of data in transit and at rest using
                industry-standard protocols
              </li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Employee training on data protection and privacy</li>
              <li>
                Incident response procedures and breach notification protocols
              </li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your information, we cannot guarantee
              absolute security. You are responsible for maintaining the
              confidentiality of your account credentials.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            6. Your Rights and Choices
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Under applicable UAE data protection laws, you have certain rights
              regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Access:</strong> Request access to and copies of your
                personal information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information, subject to legal and contractual obligations
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing
                activities, including direct marketing
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                under certain circumstances
              </li>
              <li>
                <strong>Data Portability:</strong> Request transfer of your
                information to another service provider where technically
                feasible
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw your consent at any
                time where processing is based on consent
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information
              provided in Section 13. We will respond to your request within a
              reasonable timeframe and in accordance with applicable law. We may
              require verification of your identity before processing your
              request.
            </p>
            <p>
              You may also opt out of marketing communications by clicking the
              unsubscribe link in our emails or contacting us directly.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Cookies and Tracking */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            7. Cookies and Tracking Technologies
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We use cookies, web beacons, and similar tracking technologies to
              collect and store information about your interactions with our
              website. Cookies are small text files placed on your device that
              help us:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and user experience</li>
            </ul>
            <p className="mt-4">
              We use both session cookies (which expire when you close your
              browser) and persistent cookies (which remain on your device until
              deleted or expired). You can control cookies through your browser
              settings, but disabling cookies may affect website functionality.
            </p>
            <p>
              We may also use third-party analytics and advertising services
              that use cookies and similar technologies. These services are
              subject to their own privacy policies.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            8. Third-Party Services and Links
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Our website and services may contain links to third-party
              websites, services, or applications that are not operated by us.
              We are not responsible for the privacy practices of these third
              parties. We encourage you to review the privacy policies of any
              third-party services you access.
            </p>
            <p>We may integrate with third-party services such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Payment processors (e.g., Stripe, PayPal)</li>
              <li>
                Social media platforms (e.g., Facebook, Instagram, LinkedIn)
              </li>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Property listing platforms and databases</li>
            </ul>
            <p className="mt-4">
              Your interactions with these third-party services are governed by
              their respective privacy policies and terms of service.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            9. Data Retention
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. Factors
              that determine retention periods include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The nature and purpose of the information collected</li>
              <li>Legal, regulatory, and contractual obligations</li>
              <li>The need to resolve disputes and enforce agreements</li>
              <li>Business and operational requirements</li>
            </ul>
            <p className="mt-4">
              When personal information is no longer needed, we will securely
              delete or anonymize it in accordance with our data retention
              policies and applicable law.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            10. Children&apos;s Privacy
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Our services are not intended for individuals under the age of 18
              (or the age of majority in your jurisdiction). We do not knowingly
              collect personal information from children without appropriate
              parental consent.
            </p>
            <p>
              If we become aware that we have collected personal information
              from a child without parental consent, we will take steps to
              delete such information promptly. If you believe we have collected
              information from a child, please contact us immediately.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* International Data Transfers */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            11. International Data Transfers
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              Your information may be transferred to and processed in countries
              other than the United Arab Emirates, including countries that may
              have different data protection laws. We take appropriate measures
              to ensure that your information receives adequate protection in
              accordance with this Privacy Policy and applicable law.
            </p>
            <p>
              By using our services, you consent to the transfer of your
              information to countries outside the UAE for the purposes
              described in this Privacy Policy.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Changes to Privacy Policy */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            12. Changes to This Privacy Policy
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or for
              other reasons. We will notify you of any material changes by:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Posting the updated Privacy Policy on our website</li>
              <li>
                Updating the &quot;Last Updated&quot; date at the top of this
                policy
              </li>
              <li>
                Sending you an email notification (if we have your email
                address)
              </li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p className="mt-4">
              Your continued use of our services after such changes constitutes
              your acceptance of the updated Privacy Policy. We encourage you to
              review this Privacy Policy periodically to stay informed about how
              we protect your information.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            13. Contact Information
          </h2>
          <div className="text-foreground/90 space-y-3 text-base leading-relaxed sm:text-lg">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted mt-4 rounded-lg border p-6">
              <p className="mb-2 font-semibold">Piptan Capital L.L.C</p>
              <p>Registration No.: 2699641</p>
              <p>License No.: 1551118</p>
              <p className="mt-4">
                For privacy-related inquiries, please visit our{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline underline-offset-2"
                >
                  contact page
                </Link>
                .
              </p>
              <p className="mt-2">
                You may also contact our Data Protection Officer (if applicable)
                for matters related to data protection and privacy.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* License Information with QR Code */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            14. License Information
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
              regulations of the United Arab Emirates, including data protection
              regulations. We uphold the highest ethical and regulatory
              standards in all our activities, ensuring that our practices
              reflect both local and international best practices.
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
                understood, and agree to be bound by this Privacy Policy.
              </strong>
            </p>
            <p className="text-foreground/90 mt-4 text-base leading-relaxed sm:text-lg">
              If you do not agree with this Privacy Policy, please do not use
              our services.
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
