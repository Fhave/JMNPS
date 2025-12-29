import { School, Users, Library, Brain, Lightbulb, UserCheck, Flower, Users as Community, PartyPopper } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-4 font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">

      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-md">
            <School className="text-text-light dark:text-zinc-900 w-6 h-6" />
          </div>
          <span className="font-bold text-xl text-text-light dark:text-text-dark">[School Name]</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="hover:text-primary transition-colors" href="/">Home</a>
          <a className="text-primary font-semibold" href="/about">About</a>
          <a className="hover:text-primary transition-colors" href="/academics">Academics</a>
          <a className="hover:text-primary transition-colors" href="/admissions">Admissions</a>
          <a className="hover:text-primary transition-colors" href="/calendar">Calendar</a>
          <a className="hover:text-primary transition-colors" href="/news">News & Updates</a>
          <a className="hover:text-primary transition-colors" href="/contact">Contact</a>
        </nav>
      </header>

      <main className="py-16 md:py-24">

        {/* About Intro */}
        <section className="mb-20 md:mb-28 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-light dark:text-white">
            About Our School
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            A nurturing environment dedicated to providing a high-quality education for young children.
            Our curriculum elevates play-based learning that prepares students for primary education and beyond.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <School className="text-primary w-12 h-12 mb-4 mx-auto" />, title: "Established 1990", desc: "Over 3 decades of excellence in education." },
            { icon: <Users className="text-primary w-12 h-12 mb-4 mx-auto" />, title: "150+ Students", desc: "A close-knit community of learners." },
            { icon: <Library className="text-primary w-12 h-12 mb-4 mx-auto" />, title: "18 Primary Years", desc: "Specializing in foundational learning." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm">
              {icon}
              <h3 className="text-2xl font-bold text-text-light dark:text-white">{title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{desc}</p>
            </div>
          ))}
        </section>

        {/* Heads of School */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white">Heads of School</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-4">
              Meet the dedicated leaders guiding our school's vision and nurturing our students' growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { name: "Dr. Evelyn Reed", role: "Headmistress", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_RWMypIG_cTr4xoq7mfjjW6VfVZeOXA_bS0fdkEv_bahkx596UFi1bq7UKK-KiJlekeh_KD0D7HtrXqfY6D7luKeGGiJhF2z8N7X-BJEu3rnTGxu0UZkrh9S93hJCUYTtIWTQSA02qosN1wbniGPQxqmgS0z9ehVyspu4ax9O_rQccBf_jUfwV1UYNvbDHXn3yuMgQvp0LIm9IIO0T6HhsR2KNQp8vY4MVQBbpvHto8KpkLqHANNeZUkMr1in1EE0oDft6wsf9CWW", desc: "With 25 years in child education, Dr. Reed fosters an environment of curiosity and academic excellence." },
              { name: "Mr. David Chen", role: "Deputy Head", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5jIvs2cB4mf-RxuHMZtoApKsiig-oJK6h_vt1y9_zUSICodpm38TLL6etBedRZ0OYpCFW5jXqJLEy8GTwTn6bXmPvblTu3rmds3jsa24aBeLhbslEHaFQYH0gxHL_oHTXhp6cqeWIgW_AupO1mYpRyUqgh1jDErKjq31qDs6CIJ4PlTSGD24JlpH13lkqVhqyOwF-PVwYbnRvslRcYSUxQ0RwTF0IE_ccv3ledK7fHXfj8lXna-qCVNhAZ8QSwo5CfdtAgl6EN5WH", desc: "Mr. Chen is dedicated to innovative teaching methods and ensuring every student achieves their potential." },
            ].map(({ name, role, img, desc }) => (
              <div key={name} className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-8">
                <img src={img} alt={`Portrait of ${name}`} className="w-32 h-32 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-white">{name}</h3>
                  <p className="text-primary font-semibold mb-2">{role}</p>
                  <p className="text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white">Why Choose Us</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-4">
              Discover the unique advantages that make our school the perfect place for your child's educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain className="text-primary w-12 h-12" />, title: "Expert Teachers", desc: "Our passionate educators are experts in early childhood development, committed to personalized learning." },
              { icon: <Lightbulb className="text-primary w-12 h-12" />, title: "Innovative Curriculum", desc: "A balanced curriculum that blends core academics with arts, music, and physical education." },
              { icon: <UserCheck className="text-primary w-12 h-12" />, title: "Safe & Supportive", desc: "We provide a secure and inclusive campus where every child feels valued and respected." },
              { icon: <Flower className="text-primary w-12 h-12" />, title: "Holistic Development", desc: "Focus on nurturing social, emotional, and cognitive skills for well-rounded individuals." },
              { icon: <Community className="text-primary w-12 h-12" />, title: "Community Focused", desc: "Strong parent-teacher partnerships create a supportive network for our students." },
              { icon: <PartyPopper className="text-primary w-12 h-12" />, title: "Joyful Learning", desc: "We believe learning should be an exciting adventure, sparking a lifelong love for knowledge." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm">
                <div className="bg-primary/10 dark:bg-primary/20 inline-block p-3 rounded-lg mb-4">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

