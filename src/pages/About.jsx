import {
  School,
  Users,
  Library,
  Brain,
  Lightbulb,
  UserCheck,
  Flower,
  Users as Community,
  PartyPopper,
} from "lucide-react";
import Navbar from "../components/Navbar"; // added

export default function About() {
  return (
    <div className="container mx-auto bg-background-light px-6 py-4 font-display text-text-light dark:bg-background-dark dark:text-text-dark">
      <Navbar />
      <main className="py-16 md:py-24">
        {/* About Intro */}
        <section className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <h1 className="mb-4 text-4xl font-bold text-text-light md:text-6xl dark:text-white">
            About Our School
          </h1>
          <p className="text-lg text-slate-600 md:text-xl dark:text-slate-400">
            A nurturing environment dedicated to providing a high-quality
            education for young children. Our curriculum elevates play-based
            learning that prepares students for primary education and beyond.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mt-12 grid grid-cols-1 gap-8 text-center md:mt-16 md:grid-cols-3">
          {[
            {
              icon: <School className="mx-auto mb-4 h-12 w-12 text-primary" />,
              title: "Established 1990",
              desc: "Over 3 decades of excellence in education.",
            },
            {
              icon: <Users className="mx-auto mb-4 h-12 w-12 text-primary" />,
              title: "150+ Students",
              desc: "A close-knit community of learners.",
            },
            {
              icon: <Library className="mx-auto mb-4 h-12 w-12 text-primary" />,
              title: "18 Primary Years",
              desc: "Specializing in foundational learning.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm"
            >
              {icon}
              <h3 className="text-2xl font-bold text-text-light dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{desc}</p>
            </div>
          ))}
        </section>

        {/* Heads of School */}
        <section className="mb-20 md:mb-28">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="text-3xl font-bold text-text-light md:text-5xl dark:text-white">
              Heads of School
            </h2>
            <p className="mt-4 text-lg text-slate-600 md:text-xl dark:text-slate-400">
              Meet the dedicated leaders guiding our school's vision and
              nurturing our students' growth.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {[
              {
                name: "Dr. Evelyn Reed",
                role: "Headmistress",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_RWMypIG_cTr4xoq7mfjjW6VfVZeOXA_bS0fdkEv_bahkx596UFi1bq7UKK-KiJlekeh_KD0D7HtrXqfY6D7luKeGGiJhF2z8N7X-BJEu3rnTGxu0UZkrh9S93hJCUYTtIWTQSA02qosN1wbniGPQxqmgS0z9ehVyspu4ax9O_rQccBf_jUfwV1UYNvbDHXn3yuMgQvp0LIm9IIO0T6HhsR2KNQp8vY4MVQBbpvHto8KpkLqHANNeZUkMr1in1EE0oDft6wsf9CWW",
                desc: "With 25 years in child education, Dr. Reed fosters an environment of curiosity and academic excellence.",
              },
              {
                name: "Mr. David Chen",
                role: "Deputy Head",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5jIvs2cB4mf-RxuHMZtoApKsiig-oJK6h_vt1y9_zUSICodpm38TLL6etBedRZ0OYpCFW5jXqJLEy8GTwTn6bXmPvblTu3rmds3jsa24aBeLhbslEHaFQYH0gxHL_oHTXhp6cqeWIgW_AupO1mYpRyUqgh1jDErKjq31qDs6CIJ4PlTSGD24JlpH13lkqVhqyOwF-PVwYbnRvslRcYSUxQ0RwTF0IE_ccv3ledK7fHXfj8lXna-qCVNhAZ8QSwo5CfdtAgl6EN5WH",
                desc: "Mr. Chen is dedicated to innovative teaching methods and ensuring every student achieves their potential.",
              },
            ].map(({ name, role, img, desc }) => (
              <div
                key={name}
                className="bg-card-light dark:bg-card-dark flex flex-col items-center gap-8 rounded-xl p-8 shadow-sm sm:flex-row"
              >
                <img
                  src={img}
                  alt={`Portrait of ${name}`}
                  className="h-32 w-32 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-white">
                    {name}
                  </h3>
                  <p className="mb-2 font-semibold text-primary">{role}</p>
                  <p className="text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="text-3xl font-bold text-text-light md:text-5xl dark:text-white">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-slate-600 md:text-xl dark:text-slate-400">
              Discover the unique advantages that make our school the perfect
              place for your child's educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "Expert Teachers",
                desc: "Our passionate educators are experts in early childhood development, committed to personalized learning.",
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-primary" />,
                title: "Innovative Curriculum",
                desc: "A balanced curriculum that blends core academics with arts, music, and physical education.",
              },
              {
                icon: <UserCheck className="h-12 w-12 text-primary" />,
                title: "Safe & Supportive",
                desc: "We provide a secure and inclusive campus where every child feels valued and respected.",
              },
              {
                icon: <Flower className="h-12 w-12 text-primary" />,
                title: "Holistic Development",
                desc: "Focus on nurturing social, emotional, and cognitive skills for well-rounded individuals.",
              },
              {
                icon: <Community className="h-12 w-12 text-primary" />,
                title: "Community Focused",
                desc: "Strong parent-teacher partnerships create a supportive network for our students.",
              },
              {
                icon: <PartyPopper className="h-12 w-12 text-primary" />,
                title: "Joyful Learning",
                desc: "We believe learning should be an exciting adventure, sparking a lifelong love for knowledge.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 dark:bg-primary/20">
                  {icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-text-light dark:text-white">
                  {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
