import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

function ComplianceShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">
          <ArrowLeft className="h-4 w-4" />
          Back to Adbox
        </Link>
        <header className="legal-header">
          <img src="/AdBox-logo-fullColor-Dark.svg" alt="Adbox" />
          <span>Last updated: April 21, 2026</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        <div className="legal-content">{children}</div>
        <footer className="legal-footer">
          <a href="mailto:info@adboxgh.com">
            <Mail className="h-4 w-4" />
            info@adboxgh.com
          </a>
          <a href="tel:+233538897225">
            <Phone className="h-4 w-4" />
            +233 53 889 7225
          </a>
          <span>
            <MapPin className="h-4 w-4" />
            Accra, Ghana
          </span>
        </footer>
      </div>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <ComplianceShell
      title="Privacy Policy"
      intro="This policy explains how Adbox collects, uses, stores, shares, and deletes personal information when people use our website, mobile app, OAuth login, and WhatsApp OTP verification."
    >
      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect account information such as name, email address, phone
          number, business name, location, campaign preferences, device details,
          and support messages. When a user chooses Google or Facebook login, we
          request only the basic profile data needed to create or secure the
          Adbox account, such as name, email address, and profile identifier.
        </p>
      </section>
      <section>
        <h2>How We Use Information</h2>
        <p>
          We use personal information to create accounts, verify identity,
          provide campaign tools, send requested WhatsApp OTP codes, protect the
          service from abuse, provide support, and improve the Adbox experience.
          We do not sell Google, Facebook, or WhatsApp verification data.
        </p>
      </section>
      <section>
        <h2>Google And Facebook Data</h2>
        <p>
          OAuth data is used only for account creation, authentication, account
          recovery, and security. Adbox does not use OAuth profile data for
          unrelated advertising, does not transfer it to data brokers, and does
          not expose it publicly.
        </p>
      </section>
      <section>
        <h2>WhatsApp OTP Data</h2>
        <p>
          Phone numbers used for WhatsApp OTP are used to send one-time
          verification codes requested by the user. OTP messages are not used for
          marketing. Verification codes expire and are used only to confirm phone
          ownership.
        </p>
      </section>
      <section>
        <h2>Retention And Deletion</h2>
        <p>
          We keep account data while the account is active or as needed for
          service, legal, security, and fraud-prevention purposes. Users can
          request deletion through our Data Deletion page or by emailing
          info@adboxgh.com.
        </p>
      </section>
    </ComplianceShell>
  );
}

export function TermsOfService() {
  return (
    <ComplianceShell
      title="Terms Of Service"
      intro="These terms govern access to Adbox websites, mobile apps, campaign tools, account features, and verification services."
    >
      <section>
        <h2>Use Of Adbox</h2>
        <p>
          Adbox helps business owners connect with customers through mobile-first
          advertising, campaign tools, account services, and verification flows.
          Users must provide accurate information and use the service lawfully.
        </p>
      </section>
      <section>
        <h2>Accounts And Verification</h2>
        <p>
          Users may create accounts using direct registration, Google login,
          Facebook login, or phone verification where available. Users are
          responsible for protecting their account and for activity under it.
        </p>
      </section>
      <section>
        <h2>Campaign Standards</h2>
        <p>
          Campaigns must not include illegal, misleading, abusive, infringing, or
          harmful content. Adbox may reject, pause, or remove campaigns that
          violate platform rules, partner policies, or applicable law.
        </p>
      </section>
      <section>
        <h2>Service Changes</h2>
        <p>
          We may improve, change, suspend, or discontinue parts of the service.
          We may also update these terms as the product, legal requirements, or
          platform policies change.
        </p>
      </section>
    </ComplianceShell>
  );
}

export function DataDeletion() {
  return (
    <ComplianceShell
      title="Data Deletion Instructions"
      intro="Users can request deletion of Adbox account data, Google or Facebook linked login data, and WhatsApp verification information."
    >
      <section>
        <h2>How To Request Deletion</h2>
        <p>
          Email info@adboxgh.com with the subject "Data Deletion Request" and
          include the email address, phone number, or social login used with the
          Adbox account. We may ask for reasonable verification before deleting
          account data.
        </p>
      </section>
      <section>
        <h2>What We Delete</h2>
        <p>
          We delete or anonymize account profile data, linked Google or Facebook
          identifiers, phone verification records, and support data where
          deletion is legally and technically possible.
        </p>
      </section>
      <section>
        <h2>Processing Time</h2>
        <p>
          We aim to process deletion requests within 30 days. Some records may be
          retained longer when required for legal, security, fraud prevention, or
          financial reporting obligations.
        </p>
      </section>
    </ComplianceShell>
  );
}

export function Support() {
  return (
    <ComplianceShell
      title="Support"
      intro="Contact Adbox for account support, OAuth review questions, WhatsApp OTP help, campaign support, privacy requests, and data deletion requests."
    >
      <section>
        <h2>Contact</h2>
        <p>
          Email info@adboxgh.com or call +233 53 889 7225. Adbox is based in
          Accra, Ghana.
        </p>
      </section>
      <section>
        <h2>OAuth And OTP Support</h2>
        <p>
          For Google login, Facebook login, or WhatsApp OTP issues, include the
          account email, phone number, device type, and a short description of
          the issue so our team can investigate.
        </p>
      </section>
    </ComplianceShell>
  );
}
