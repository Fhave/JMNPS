const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect personal information that you voluntarily provide when
          you fill out an admission inquiry form, contact us, or register for
          school programs. This includes:
        </p>
        <ul>
          <li>
            <strong>Parent/Guardian Information:</strong> Full name, phone
            number, email address, residential address, and relationship to the
            child.
          </li>
          <li>
            <strong>Pupil Information:</strong> Child’s full name, date of
            birth, gender, previous school records, and relevant health or
            allergy information submitted during admissions.
          </li>
          <li>
            <strong>Technical Data:</strong> Basic browser type, IP address, and
            usage statistics collected automatically to improve website
            performance and security.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use the information collected to:</p>
        <ul>
          <li>
            Process admission inquiries, enrollment applications, and school
            tours.
          </li>
          <li>
            Communicate important updates, academic calendars, newsletters, and
            event notifications to parents and guardians.
          </li>
          <li>
            Ensure the safety, health, and well-being of pupils under our care.
          </li>
          <li>
            Improve our website functionality, curriculum presentation, and
            parent support services.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Protection of Children’s Privacy",
    content: (
      <p>
        As a creche, nursery, and primary institution, we take the privacy of
        minors seriously. We do not knowingly collect personal data directly
        from children through our website. All pupil information must be
        submitted by a parent or legal guardian.
      </p>
    ),
  },
  {
    title: "4. Sharing and Disclosure of Information",
    content: (
      <>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties. We may share information only in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Trusted third-party partners who
            assist in operating our website, school management portal, or
            communication tools, bound by strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by Nigerian law,
            educational regulatory bodies (such as the Lagos State Ministry of
            Education), or to protect the safety and rights of our pupils and
            staff.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Security and Retention",
    content: (
      <p>
        We implement appropriate administrative, technical, and physical
        safeguards to protect personal data against unauthorized access,
        alteration, or loss. Personal information is retained only for as long
        as necessary to fulfill educational, administrative, or legal
        obligations.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <>
        <p>
          Under applicable Nigerian data protection laws, parents and website
          visitors have the right to:
        </p>
        <ul>
          <li>
            Request access to the personal information we hold about you or your
            child.
          </li>
          <li>Request corrections to inaccurate or incomplete records.</li>
          <li>
            Withdraw consent for non-essential communications or photo/media
            usage at any time.
          </li>
        </ul>
      </>
    ),
  },
];

export default function DataProtection() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 md:py-24">
      <article className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <header className="mb-12 border-b border-gray-100 pb-8">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#7c3aed] uppercase">
            Last Updated: November 2026
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#1e1b4b] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 leading-7 text-gray-600">
            JonMay Schools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting the privacy and personal information of
            our pupils, parents, guardians, staff, and website visitors. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or engage with our
            school services, in compliance with the{" "}
            <strong>Nigeria Data Protection Act (NDPA)</strong>.
          </p>
        </header>

        <div className="space-y-10 leading-7 text-gray-600">
          {sections.map(({ title, content }) => (
            <section key={title}>
              <h2 className="mb-3 text-xl font-bold text-[#1e1b4b]">{title}</h2>
              <div className="space-y-3 [&_li]:ml-6 [&_li]:list-disc [&_ul]:space-y-2">
                {content}
              </div>
            </section>
          ))}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1e1b4b]">
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your data rights, please contact us:
            </p>
            <ul className="mt-3 space-y-2 [&_li]:ml-6 [&_li]:list-disc">
              <li>
                <strong>School Address:</strong> No. 2, Lateef Musa Street, off
                LASU Road, opposite Dutchess Filling Station, near Akesan Bus
                Stop, Akesan, Lagos.
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jonmayschools@gmail.com"
                  className="text-[#7c3aed] hover:underline"
                >
                  jonmayschools@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+2348033039284"
                  className="text-[#7c3aed] hover:underline"
                >
                  +234 803 303 9284
                </a>
                ,{" "}
                <a
                  href="tel:+2348033022278"
                  className="text-[#7c3aed] hover:underline"
                >
                  +234 803 302 2278
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
