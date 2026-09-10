import { Metadata } from "next";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const DESCRIPTION =
  "How STUDIO SB collects, uses, protects and retains personal data under Singapore's Personal Data Protection Act 2012.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Sanchez",
    description: DESCRIPTION,
    url: "https://www.sanchezbarry.com/privacy",
  },
};

// Deliberately unlinked from the navbar and footer: the page exists so it can
// be pointed at directly, e.g. from a contract or a form.

const Section = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-12">
    <h2 className="mb-4 text-2xl font-light md:text-3xl">
      {n}. {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default function Privacy() {
  return (
    <main className="mx-auto mt-36 mb-24 max-w-2xl px-6 md:px-10">
      <header className="border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <h1 className="text-4xl font-light md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg text-neutral-800 dark:text-neutral-200">
          <strong className="font-semibold">STUDIO SB</strong> (UEN 53529537E)
        </p>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
          Last updated: 9 September 2026
        </p>
      </header>

      <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <Section n={1} title="About this policy">
          <p>
            STUDIO SB (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a sole
            proprietorship registered in Singapore under UEN 53529537E. We provide web
            development and social media services.
          </p>
          <p>
            This policy explains how we collect, use, disclose, protect and retain
            personal data in accordance with the Personal Data Protection Act 2012 of
            Singapore (the &quot;PDPA&quot;). It applies to personal data we collect
            through our website at sanchezbarry.com, through email correspondence with
            us, and in the course of providing our services.
          </p>
          <p>
            By using our website or contacting us, you acknowledge that you have read and
            understood this policy.
          </p>
        </Section>

        <Section n={2} title="What personal data we collect">
          <p>We collect only what we need. Specifically:</p>
          <p>
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
              Through our contact form.
            </strong>{" "}
            When you submit an enquiry through the contact form on our website, we collect
            your <strong className="font-semibold">name</strong> and{" "}
            <strong className="font-semibold">email address</strong>, together with the
            content of the message you choose to send us.
          </p>
          <p>
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
              Through email.
            </strong>{" "}
            If you email us directly, we receive your email address, your name if you
            provide it, and the contents of your message, including any information
            contained in attachments you send.
          </p>
          <p>
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
              Through our website analytics.
            </strong>{" "}
            We use Vercel Web Analytics and Vercel Speed Insights to understand how our
            website is used and to monitor its performance. These tools do not use cookies
            and do not collect information that identifies you personally. They record
            anonymised, aggregated data points such as page views, referring pages,
            approximate location, browser and operating system, and page performance
            measurements. This data is not linked to you as an individual and we cannot
            use it to identify you.
          </p>
          <p>
            We do not operate a customer database or a customer relationship management
            system. Enquiries submitted through our website are delivered to our email
            inbox and are not stored in any separate system.
          </p>
          <p>
            We do not collect sensitive personal data such as identification numbers,
            financial details or health information through our website. Please do not
            send such information to us through the contact form.
          </p>
        </Section>

        <Section n={3} title="Why we collect it, and your consent">
          <p>
            We collect, use and disclose your personal data for the following purposes:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>To respond to your enquiry and to correspond with you about it</li>
            <li>To provide, manage and deliver our services if you engage us</li>
            <li>To prepare quotations, proposals, contracts and invoices</li>
            <li>To maintain business and accounting records as required by law</li>
            <li>
              To improve our website and understand how it is used, using anonymised
              analytics data only
            </li>
          </ul>
          <p>
            We rely on your consent to collect and use your personal data for these
            purposes. By submitting the contact form or emailing us, you consent to our
            collecting and using your personal data as described in this policy.
          </p>
          <p>
            We will not use your personal data for any purpose materially different from
            those set out above without first notifying you and obtaining your consent.
          </p>
          <p>
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
              We do not send marketing messages.
            </strong>{" "}
            We will not add you to a mailing list, send you promotional material, or
            disclose your personal data to any third party for marketing purposes.
          </p>
        </Section>

        <Section n={4} title="Withdrawing your consent">
          <p>
            You may withdraw your consent to our collection, use or disclosure of your
            personal data at any time by contacting our Data Protection Officer using the
            details in section 11. We will action your request within a reasonable time.
          </p>
          <p>
            Please note that if you withdraw your consent, we may be unable to respond to
            your enquiry or continue providing services to you. We will inform you of the
            likely consequences before giving effect to your withdrawal. Withdrawal of
            consent does not affect our ability to retain data where we are required or
            permitted by law to do so.
          </p>
        </Section>

        <Section n={5} title="Who we share it with">
          <p>
            We do not sell your personal data, and we do not share it with third parties
            for their own purposes.
          </p>
          <p>
            We use the following service providers, which process personal data on our
            behalf in order to operate our website and email:
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Provider</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="align-top font-medium">Vercel Inc.</TableCell>
                  <TableCell>
                    Website hosting, and anonymised website analytics and performance
                    monitoring
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="align-top font-medium">
                    Squarespace Inc. and its email service provider
                  </TableCell>
                  <TableCell>
                    Receiving email sent to our domain and forwarding it to our inbox
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="align-top font-medium">Google LLC</TableCell>
                  <TableCell>
                    Our email mailbox, where correspondence with us is stored
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p>
            We may also disclose personal data where we are required to do so by law, by a
            court order, or by a regulatory or law enforcement authority.
          </p>
        </Section>

        <Section n={6} title="Transfers outside Singapore">
          <p>
            The service providers listed in section 5 are based outside Singapore,
            primarily in the United States, and your personal data will be transferred to
            and stored on their servers overseas.
          </p>
          <p>
            Where we transfer personal data outside Singapore, we take reasonable steps to
            ensure that the receiving organisation is bound by legally enforceable
            obligations to provide a standard of protection comparable to that required
            under the PDPA. In practice this means we rely on the data protection terms in
            our contracts with these providers.
          </p>
        </Section>

        <Section n={7} title="How we protect your data">
          <p>
            We take reasonable security arrangements to protect personal data in our
            possession or control against unauthorised access, collection, use,
            disclosure, copying, modification, disposal or similar risks. These include:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Two-factor authentication on the email account where enquiries are received
            </li>
            <li>
              Encrypted connections (HTTPS/TLS) for our website and for email in transit
            </li>
            <li>Limiting access to personal data to the sole proprietor of the business</li>
            <li>Using established service providers with their own security controls</li>
          </ul>
          <p>
            No method of transmission or storage is completely secure, and we cannot
            guarantee absolute security. However, we review our arrangements periodically
            and will notify you and the Personal Data Protection Commission of any data
            breach where required to do so under the PDPA.
          </p>
        </Section>

        <Section n={8} title="How long we keep it">
          <p>
            We retain personal data only for as long as it is necessary for the purposes
            described in this policy, or as required by law.
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                Enquiries that do not lead to an engagement:
              </strong>{" "}
              we delete the correspondence within 24 months of our last contact with you.
            </li>
            <li>
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                Client records:
              </strong>{" "}
              we retain correspondence, contracts and invoices for the duration of our
              engagement and for five years afterwards, in line with the record-keeping
              period required for Singapore business and tax records.
            </li>
            <li>
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                Analytics data:
              </strong>{" "}
              retained by Vercel in anonymised, aggregated form only. Visitor session
              hashes are discarded automatically after 24 hours.
            </li>
          </ul>
          <p>
            When personal data is no longer needed for any legal or business purpose, we
            delete it or remove the means by which it can be associated with you.
          </p>
        </Section>

        <Section n={9} title="Keeping your data accurate">
          <p>
            We take reasonable steps to ensure that personal data we hold is accurate and
            complete, particularly where we are likely to use it to make a decision that
            affects you, or to disclose it to another organisation. If your details
            change, please let us know.
          </p>
        </Section>

        <Section n={10} title="Your rights: access and correction">
          <p>Under the PDPA you have the right to:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                Request access
              </strong>{" "}
              to the personal data we hold about you, and information about how it has
              been used or disclosed by us in the year before your request
            </li>
            <li>
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                Request correction
              </strong>{" "}
              of any error or omission in the personal data we hold about you
            </li>
          </ul>
          <p>
            To make a request, contact our Data Protection Officer using the details in
            section 11. We will respond to your request as soon as reasonably possible,
            and ordinarily within 30 days. If we are unable to respond within 30 days, we
            will let you know when we expect to respond.
          </p>
          <p>
            We may need to verify your identity before actioning a request. A reasonable
            fee may apply to access requests, and if so we will tell you the fee before
            proceeding. In limited circumstances the PDPA permits or requires us to refuse
            a request; if that happens, we will tell you why.
          </p>
        </Section>

        <Section n={11} title="Data Protection Officer and complaints">
          <p>
            We have designated a Data Protection Officer responsible for ensuring our
            compliance with the PDPA. You may contact our Data Protection Officer with any
            question, request or complaint about how we handle personal data:
          </p>
          <p className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
              Data Protection Officer, STUDIO SB
            </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:hello@sanchezbarry.com"
              className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              hello@sanchezbarry.com
            </a>
          </p>
          <p>
            We will acknowledge your complaint and aim to respond substantively within 30
            days. If we need longer, we will tell you why and when you can expect a
            response.
          </p>
          <p>
            If you are not satisfied with our response, you may lodge a complaint with the
            Personal Data Protection Commission of Singapore at{" "}
            <a
              href="https://www.pdpc.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              pdpc.gov.sg
            </a>
            .
          </p>
          <p>
            Information about our data protection policies and practices is available on
            request from our Data Protection Officer.
          </p>
        </Section>

        <Section n={12} title="Work we do for clients">
          <p>
            When we build websites, manage social media accounts or otherwise provide
            services to our clients, we may handle personal data belonging to our
            clients&apos; own customers or users. In those cases we process that data on
            our client&apos;s instructions and on their behalf, and the client&apos;s own
            privacy policy governs how that data is collected and used.
          </p>
          <p>
            This policy covers only personal data that we collect for our own purposes.
          </p>
        </Section>

        <Section n={13} title="Changes to this policy">
          <p>
            We may update this policy from time to time to reflect changes in our
            practices or in the law. The current version will always be available on this
            page, and the date at the top shows when it was last updated. Where changes
            are significant, we will take reasonable steps to bring them to your
            attention.
          </p>
        </Section>

        <p className="mt-12 border-t border-neutral-200 pt-8 text-sm italic text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
          This policy is provided for information and does not constitute legal advice.
        </p>
      </div>
    </main>
  );
}
