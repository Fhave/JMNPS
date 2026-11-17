const sections = [
  {
    title: "1. Use of Website",
    content: (
      <>
        <p>
          This website is provided to share information about JonMay Schools’
          history, curriculum, extracurricular programs, admissions process, and
          school events. You agree to use this website lawfully and not to:
        </p>
        <ul>
          <li>
            Submit false, misleading, or fraudulent information through any
            inquiry or admission forms.
          </li>
          <li>
            Attempt to disrupt, hack, or compromise the security or
            functionality of the website.
          </li>
          <li>
            Copy, distribute, or misuse content for commercial purposes without
            prior written permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Admissions and School Information",
    content: (
      <p>
        Information regarding our classes (Creche, Nursery, and Primary),
        subjects, and programs is provided for general informational purposes.
        Submission of an online inquiry or application form does not
        automatically guarantee admission. All admissions are subject to the
        school’s enrollment policies, age requirements, assessment procedures,
        and availability of space.
      </p>
    ),
  },
  {
    title: "3. Intellectual Property",
    content: (
      <p>
        All content on this website—including the JonMay Schools name, logo,
        vision statement, text, graphics, curriculum descriptions, and
        photographs—is the intellectual property of JonMay Schools or its
        licensed partners. Unauthorized reproduction, modification, or
        redistribution of any material on this site is strictly prohibited.
        Illustrative and AI-generated imagery may be used across this website to
        visually represent our learning environment and programs.
      </p>
    ),
  },
  {
    title: "4. Third-Party Links",
    content: (
      <p>
        Our website may contain links to external websites or resources (such as
        maps, educational tools, or social media pages) for your convenience.
        JonMay Schools does not control and is not responsible for the content,
        privacy practices, or availability of third-party websites.
      </p>
    ),
  },
  {
    title: "5. Limitation of Liability",
    content: (
      <p>
        While we strive to keep all information on this website accurate and up
        to date, JonMay Schools makes no warranties regarding the completeness
        or uninterrupted availability of the site. To the fullest extent
        permitted by law, JonMay Schools shall not be liable for any direct or
        indirect damages arising from your use of, or inability to use, this
        website.
      </p>
    ),
  },
  {
    title: "6. Changes to These Terms",
    content: (
      <p>
        JonMay Schools reserves the right to update or modify these Terms of
        Service at any time without prior notice. Changes take effect
        immediately upon posting on this page.
      </p>
    ),
  },
  {
    title: "7. Governing Law",
    content: (
      <p>
        These Terms of Service are governed by and construed in accordance with
        the laws of the Federal Republic of Nigeria. Any disputes arising in
        connection with this website shall be subject to the exclusive
        jurisdiction of the courts in Lagos State, Nigeria.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 md:py-24">
      <article className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <header className="mb-12 border-b border-gray-100 pb-8">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#7c3aed] uppercase">
            Last Updated: November 2026
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#1e1b4b] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-5 leading-7 text-gray-600">
            Welcome to the official website of <strong>JonMay Schools</strong>.
            By accessing or using this website, you agree to comply with and be
            bound by the following Terms of Service. If you do not agree with
            these terms, please refrain from using the website.
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
        </div>
      </article>
    </main>
  );
}
